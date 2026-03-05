(function (l) {
  const repoName = "/fds";
  const isProduction = l.pathname.startsWith(repoName);

  if (l.search[1] === "p") {
    const params = new URLSearchParams(l.search);
    const path = params.get("p");

    if (path) {
      const finalPath = isProduction ? repoName + path : path;
      window.history.replaceState(null, null, finalPath + l.hash);
    }
  }
})(window.location);
