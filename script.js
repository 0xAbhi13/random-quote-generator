/* ==========================================================================
   Random Quote Generator — application script
   Veda Technology Web Development Internship — Task 8
   Vanilla JavaScript only: no frameworks, no eval(), no inline handlers.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. QUOTE DATASET
     Public-domain and long-attributed quotations. Where an author cannot be
     confirmed with confidence, "Anonymous" is used instead of inventing one.
     Every object has: text, author, category.
     ---------------------------------------------------------------------- */
  const QUOTES = [
    /* ---- Motivation ---- */
    {
      text: 'Whether you think you can or you think you cannot, you are right.',
      author: 'Henry Ford',
      category: 'Motivation'
    },
    {
      text: 'The best way to do great work is to love what you do.',
      author: 'Steve Jobs',
      category: 'Motivation'
    },
    {
      text: 'Success is the sum of small efforts, repeated day in and day out.',
      author: 'Robert Collier',
      category: 'Motivation'
    },
    {
      text: 'It always seems impossible until it is done.',
      author: 'Nelson Mandela',
      category: 'Motivation'
    },
    {
      text: 'Do not wait for the perfect moment. Take the moment and make it perfect.',
      author: 'Anonymous',
      category: 'Motivation'
    },

    /* ---- Life ---- */
    {
      text: 'In three words I can sum up everything I have learned about life: it goes on.',
      author: 'Robert Frost',
      category: 'Life'
    },
    {
      text: 'Simplicity is the ultimate sophistication.',
      author: 'Leonardo da Vinci',
      category: 'Life'
    },
    {
      text: 'Do what you can, with what you have, where you are.',
      author: 'Theodore Roosevelt',
      category: 'Life'
    },
    {
      text: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
      author: 'Anonymous',
      category: 'Life'
    },

    /* ---- Success ---- */
    {
      text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      author: 'Winston Churchill',
      category: 'Success'
    },
    {
      text: 'The secret of getting ahead is getting started.',
      author: 'Mark Twain',
      category: 'Success'
    },
    {
      text: 'Great things are done by a series of small things brought together.',
      author: 'Vincent van Gogh',
      category: 'Success'
    },
    {
      text: 'Fortune favours the bold.',
      author: 'Latin proverb',
      category: 'Success'
    },
    {
      text: 'Nothing will work unless you do.',
      author: 'Maya Angelou',
      category: 'Success'
    },

    /* ---- Wisdom ---- */
    {
      text: 'The unexamined life is not worth living.',
      author: 'Socrates',
      category: 'Wisdom'
    },
    {
      text: 'We suffer more often in imagination than in reality.',
      author: 'Seneca',
      category: 'Wisdom'
    },
    {
      text: 'It is not that we have too little time, but that we waste too much of it.',
      author: 'Seneca',
      category: 'Wisdom'
    },
    {
      text: 'Order your soul. Reduce your wants.',
      author: 'Augustine of Hippo',
      category: 'Wisdom'
    },
    {
      text: 'A mind that is stretched by a new experience can never go back to its old dimensions.',
      author: 'Oliver Wendell Holmes Jr.',
      category: 'Wisdom'
    },

    /* ---- Resilience ---- */
    {
      text: 'Fall seven times, stand up eight.',
      author: 'Japanese proverb',
      category: 'Resilience'
    },
    {
      text: 'Although the world is full of suffering, it is full also of the overcoming of it.',
      author: 'Helen Keller',
      category: 'Resilience'
    },
    {
      text: 'You may not control all the events that happen to you, but you can decide not to be reduced by them.',
      author: 'Maya Angelou',
      category: 'Resilience'
    },
    {
      text: 'Out of your vulnerabilities will come your strength.',
      author: 'Anonymous',
      category: 'Resilience'
    },

    /* ---- Learning ---- */
    {
      text: 'An investment in knowledge pays the best interest.',
      author: 'Benjamin Franklin',
      category: 'Learning'
    },
    {
      text: 'I have not failed. I have just found ten thousand ways that will not work.',
      author: 'Thomas Edison',
      category: 'Learning'
    },
    {
      text: 'The beautiful thing about learning is that nobody can take it away from you.',
      author: 'B.B. King',
      category: 'Learning'
    },
    {
      text: 'Learning never exhausts the mind.',
      author: 'Leonardo da Vinci',
      category: 'Learning'
    },
    {
      text: 'Education is the most powerful weapon which you can use to change the world.',
      author: 'Nelson Mandela',
      category: 'Learning'
    },

    /* ---- Friendship ---- */
    {
      text: 'A faithful friend is a strong defense.',
      author: 'Cicero',
      category: 'Friendship'
    },
    {
      text: 'The only way to have a friend is to be one.',
      author: 'Ralph Waldo Emerson',
      category: 'Friendship'
    },
    {
      text: 'A friend is one who knows all about you and still loves you.',
      author: 'Anonymous',
      category: 'Friendship'
    },

    /* ---- Time ---- */
    {
      text: 'Lost time is never found again.',
      author: 'Benjamin Franklin',
      category: 'Time'
    },
    {
      text: 'Time you enjoy wasting is not wasted time.',
      author: 'Bertrand Russell',
      category: 'Time'
    },
    {
      text: 'Dost thou love life? Then do not squander time, for that is the stuff life is made of.',
      author: 'Benjamin Franklin',
      category: 'Time'
    },
    {
      text: 'The past is never dead. It is not even past.',
      author: 'William Faulkner',
      category: 'Time'
    }
  ];

  /* ------------------------------------------------------------------------
     2. DOM REFERENCES
     Collected once at start-up; a missing element disables only its feature.
     ---------------------------------------------------------------------- */
  const dom = {
    card: document.getElementById('quoteCard'),
    stage: document.getElementById('quoteStage'),
    quoteText: document.getElementById('quoteText'),
    quoteAuthor: document.getElementById('quoteAuthor'),
    quoteCategory: document.getElementById('quoteCategory'),
    newQuoteBtn: document.getElementById('newQuoteBtn'),
    copyBtn: document.getElementById('copyBtn'),
    shareBtn: document.getElementById('shareBtn'),
    feedback: document.getElementById('feedback')
  };

  /* ------------------------------------------------------------------------
     3. APPLICATION STATE
     ---------------------------------------------------------------------- */
  const state = {
    currentIndex: -1,      // index of the quote on screen; -1 before first render
    messageTimer: null,    // timeout id that clears the feedback message
    ready: false           // becomes true once a quote has been rendered
  };

  /* ------------------------------------------------------------------------
     4. DATASET VALIDATION
     Drops malformed entries and reports them in the console instead of
     rendering "undefined" on screen.
     ---------------------------------------------------------------------- */
  function isValidQuote(quote) {
    return Boolean(quote) &&
      typeof quote.text === 'string' && quote.text.trim().length > 0 &&
      typeof quote.author === 'string' && quote.author.trim().length > 0 &&
      typeof quote.category === 'string' && quote.category.trim().length > 0;
  }

  function getUsableQuotes() {
    const usable = [];

    QUOTES.forEach(function (quote, index) {
      if (isValidQuote(quote)) {
        usable.push(quote);
      } else {
        console.warn('Quote #' + index + ' is missing text, author or category and was skipped.');
      }
    });

    return usable;
  }

  const quotes = getUsableQuotes();

  /* ------------------------------------------------------------------------
     5. RANDOM SELECTION WITH NO IMMEDIATE REPEATS
     Math.random() gives a float in [0, 1). We scale it to the list length and
     discard any candidate equal to the quote currently on screen.
     With more than one quote available this always yields a different one.
     ---------------------------------------------------------------------- */
  function getRandomIndex(total, excludeIndex) {
    if (total <= 0) return -1;
    if (total === 1) return 0;                    // only one quote exists

    let randomIndex = Math.floor(Math.random() * total);

    // Loop is bounded by chance: any index other than excludeIndex is valid.
    while (randomIndex === excludeIndex) {
      randomIndex = Math.floor(Math.random() * total);
    }

    return randomIndex;
  }

  /* ------------------------------------------------------------------------
     6. TEXT HELPERS
     ---------------------------------------------------------------------- */
  const LEFT_QUOTE = '\u201C';   // “
  const RIGHT_QUOTE = '\u201D';  // ”
  const DASH = '\u2014';         // —

  function getCurrentQuote() {
    return state.currentIndex >= 0 ? quotes[state.currentIndex] : null;
  }

  /* Quote + author, the exact text placed on the clipboard. */
  function buildQuoteText(quote) {
    return LEFT_QUOTE + quote.text + RIGHT_QUOTE + ' ' + DASH + ' ' + quote.author;
  }

  /* ------------------------------------------------------------------------
     7. FEEDBACK MESSAGES (copy / share results)
     ---------------------------------------------------------------------- */
  function showMessage(message, isError) {
    if (!dom.feedback) return;

    dom.feedback.textContent = message;
    dom.feedback.classList.toggle('is-error', Boolean(isError));
    dom.feedback.classList.add('is-visible');

    if (state.messageTimer) {
      clearTimeout(state.messageTimer);
    }

    state.messageTimer = setTimeout(function () {
      dom.feedback.classList.remove('is-visible');
      state.messageTimer = null;
    }, 2800);
  }

  /* ------------------------------------------------------------------------
     8. RENDERING
     Updates text, author and category together inside the live region so a
     screen reader announces the complete quote in one pass.
     ---------------------------------------------------------------------- */
  function renderQuote(index) {
    const quote = quotes[index];
    if (!quote) return;

    state.currentIndex = index;
    state.ready = true;

    // textContent is used throughout: quote data is never parsed as HTML.
    dom.quoteText.textContent = quote.text;
    dom.quoteAuthor.textContent = quote.author;
    dom.quoteCategory.textContent = quote.category;

    // Drives the per-category badge colour defined in style.css.
    dom.quoteCategory.setAttribute('data-category', quote.category);

    // Category accent for the card glow (purely decorative).
    dom.card.setAttribute('data-category', quote.category);

    restartRefreshAnimation();
  }

  /* Re-adding the class plus a forced reflow replays the fade-in animation. */
  function restartRefreshAnimation() {
    if (!dom.stage) return;

    dom.stage.classList.remove('is-refreshing');
    void dom.stage.offsetWidth;            // forces the browser to re-read layout
    dom.stage.classList.add('is-refreshing');
  }

  /* ------------------------------------------------------------------------
     9. CLIPBOARD
     Preferred: async Clipboard API (needs a secure context — https or
     localhost). Fallback: a hidden <textarea> + document.execCommand('copy'),
     which also works when the page is opened directly from the file system.
     ---------------------------------------------------------------------- */
  function copyWithTextarea(text) {
    const activeElement = document.activeElement;
    const textarea = document.createElement('textarea');

    textarea.value = text;
    textarea.setAttribute('aria-hidden', 'true');
    textarea.setAttribute('tabindex', '-1');
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '-9999px';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);

    let copied = false;
    try {
      textarea.focus();
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    } finally {
      document.body.removeChild(textarea);
      // Give focus back to whatever the user was using before.
      if (activeElement && typeof activeElement.focus === 'function') {
        activeElement.focus();
      }
    }

    return copied;
  }

  async function copyTextToClipboard(text) {
    // 1. Modern Clipboard API, only where it is actually available.
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (error) {
        // Permission denied or insecure context — fall through to the fallback.
        console.warn('Clipboard API unavailable:', error && error.message);
      }
    }

    // 2. Legacy fallback.
    return copyWithTextarea(text);
  }

  async function handleCopyQuote() {
    const quote = getCurrentQuote();
    if (!quote) {
      showMessage('No quote is available to copy.', true);
      return;
    }

    const text = buildQuoteText(quote);

    try {
      const copied = await copyTextToClipboard(text);

      if (copied) {
        showMessage('Quote copied to clipboard.');
      } else {
        showMessage('Copy failed. Please select the text and copy it manually.', true);
      }
    } catch (error) {
      // Anything unexpected is reported, never thrown at the user.
      console.error('Copy failed:', error);
      showMessage('Copy failed. Please select the text and copy it manually.', true);
    }
  }

  /* ------------------------------------------------------------------------
     10. SHARING
     Web Share API where supported; otherwise the same clipboard path used by
     the Copy button, with a message explaining what happened.
     ---------------------------------------------------------------------- */
  function canShare() {
    return typeof navigator.share === 'function';
  }

  async function handleShareQuote() {
    const quote = getCurrentQuote();
    if (!quote) {
      showMessage('No quote is available to share.', true);
      return;
    }

    const shareData = {
      title: 'Random Quote',
      text: buildQuoteText(quote) + ' (' + quote.category + ')'
    };

    // Share the page address only when it is a real web address (not file://).
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      shareData.url = window.location.href;
    }

    if (canShare()) {
      try {
        await navigator.share(shareData);
        showMessage('Quote shared.');
        return;
      } catch (error) {
        // The user closing the share sheet is a normal outcome, not an error.
        if (error && error.name === 'AbortError') {
          showMessage('Sharing cancelled.');
          return;
        }
        console.warn('Web Share API failed:', error && error.message);
        // Any other share failure falls back to copying below.
      }
    }

    // Fallback: copy the quote and tell the user.
    try {
      const copied = await copyTextToClipboard(buildQuoteText(quote));

      if (copied) {
        showMessage('Sharing is not supported here, so the quote was copied instead.');
      } else {
        showMessage('Sharing is not supported here. Please copy the text manually.', true);
      }
    } catch (error) {
      console.error('Share fallback failed:', error);
      showMessage('Sharing is not supported here. Please copy the text manually.', true);
    }
  }

  /* ------------------------------------------------------------------------
     11. NEW QUOTE
     ---------------------------------------------------------------------- */
  function handleNewQuote() {
    const nextIndex = getRandomIndex(quotes.length, state.currentIndex);

    if (nextIndex === -1) {
      showMessage('No quotes are available.', true);
      return;
    }

    renderQuote(nextIndex);
  }

  /* ------------------------------------------------------------------------
     12. KEYBOARD SHORTCUTS
     The buttons themselves are native <button> elements, so Tab plus Enter or
     Space already work. These are just extra shortcuts for speed.
     ---------------------------------------------------------------------- */
  function isTypingTarget(target) {
    if (!target) return false;
    const tagName = (target.tagName || '').toLowerCase();
    return tagName === 'input' || tagName === 'textarea' || tagName === 'select' || target.isContentEditable === true;
  }

  function handleKeydown(event) {
    if (event.ctrlKey || event.altKey || event.metaKey) return;
    if (isTypingTarget(event.target)) return;

    const key = (event.key || '').toLowerCase();

    if (key === 'n') {
      event.preventDefault();
      handleNewQuote();
    } else if (key === 'c') {
      event.preventDefault();
      handleCopyQuote();
    }
  }

  /* ------------------------------------------------------------------------
     13. EVENT LISTENERS
     addEventListener only — no inline onclick attributes, no eval().
     ---------------------------------------------------------------------- */
  function bindEvents() {
    if (dom.newQuoteBtn) {
      dom.newQuoteBtn.addEventListener('click', handleNewQuote);
    } else {
      console.error('New Quote button not found.');
    }

    if (dom.copyBtn) {
      dom.copyBtn.addEventListener('click', handleCopyQuote);
    } else {
      console.error('Copy Quote button not found.');
    }

    if (dom.shareBtn) {
      dom.shareBtn.addEventListener('click', handleShareQuote);
    } else {
      console.error('Share Quote button not found.');
    }

    document.addEventListener('keydown', handleKeydown);

    // Clean up the animation class so the DOM stays tidy between quotes.
    if (dom.stage) {
      dom.stage.addEventListener('animationend', function () {
        dom.stage.classList.remove('is-refreshing');
      });
    }
  }

  /* ------------------------------------------------------------------------
     14. START-UP
     A quote is on screen as soon as the page has loaded.
     ---------------------------------------------------------------------- */
  function init() {
    if (!dom.quoteText || !dom.quoteAuthor || !dom.quoteCategory) {
      console.error('Quote elements are missing from the page.');
      return;
    }

    if (quotes.length === 0) {
      showMessage('No quotes are available.', true);
      disableButtons();
      return;
    }

    bindEvents();

    // currentIndex is -1, so nothing is excluded from this first draw.
    const firstIndex = getRandomIndex(quotes.length, state.currentIndex);
    renderQuote(firstIndex);
  }

  function disableButtons() {
    [dom.newQuoteBtn, dom.copyBtn, dom.shareBtn].forEach(function (button) {
      if (button) button.disabled = true;
    });
  }

  init();

  // Exposed for manual testing from the browser console.
  window.quoteApp = {
    quotes: quotes,
    getCurrentQuote: getCurrentQuote,
    newQuote: handleNewQuote,
    copyQuote: handleCopyQuote,
    shareQuote: handleShareQuote,
    isReady: function () { return state.ready; }
  };
})();
