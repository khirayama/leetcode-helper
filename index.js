const utils = {
  submit: () => {
    const el = document.querySelector('button[data-cy=submit-code-btn]');
    el.click();
  },
  runExampleTestcases: () => {
    document.querySelector('button[data-cy=run-code-btn] a').click();
    const el = Array.from(document.querySelectorAll('div[class*="dropdown-item"]')).filter((el) => el.innerText === "Run Example Testcases")[0];
    el.click();
    el.classList.add('ant-dropdown-hidden')
  },
  runCode: () => {
    const el = document.querySelector('button[data-cy=run-code-btn]');
    el.click();
  },
  focusEditor: () => {
    document.activeElement.blur();
    const el = document.querySelector('.react-codemirror2 textarea');
    el.focus();
  },
  focusTestcases: () => {
    let textareaEl = document.querySelector('#testcase-editor textarea');
    if (!textareaEl) {
      const el = document.querySelector('[class*="custom-testcase"]');
      el.click();
    }
    const el = document.querySelector('[data-cy="custom-testcase"]');
    el.click();
    textareaEl = document.querySelector('#testcase-editor textarea');
    textareaEl.focus();
  },
};

function onKeyDownHandler(event) {
  if (event.keyCode === 13 /* ENTER */) {
    if (event.metaKey) {
      utils.submit();
    } else if (event.shiftKey && event.ctrlKey) {
      utils.runExampleTestcases();
    } else if (event.ctrlKey) {
      utils.runCode();
    }
  }

  if (event.keyCode === 84 /* t */) {
    if (event.ctrlKey) {
      utils.focusTestcases();
    }
  }

  if (event.keyCode === 67 /* c */) {
    if (event.ctrlKey) {
      utils.focusEditor();
    }
  }
}

window.addEventListener('load', () => {
  window.document.addEventListener('keydown', onKeyDownHandler);
});
