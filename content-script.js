
document.addEventListener("click", onClick, false)

function onClick(ev) {
  let a = ev.target.closest('a');

  if (a) {
    const href = a.href;

    if (isJiraHref(href)) {
      ev.preventDefault();
      const url = "x-choosy://open/" + href;
      window.location.href = url;
    }
  }
}

/**
 * Return `true` is the link is for Jira and should be opened in Choosy
 */
function isJiraHref(href) {
  return !/\.atlassian\.(net|com)/g.test(href) && !/^mailto:/.test(href);
}
