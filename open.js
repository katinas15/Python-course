const linkElements = document.querySelectorAll(
  "body > div > div > div.col-xs-12.col-sm-9.col-md-10.col-sm-push-3.col-md-push-2 > table > tbody > tr > td:nth-child(4) > a:nth-child(1)"
);

for (let element of linkElements) {
  window.open(element.href, "_blank");
}

("body > div > div > div.col-xs-12.col-sm-9.col-md-10.col-sm-push-3.col-md-push-2 > table > tbody > tr:nth-child(1) > td:nth-child(3) > a:nth-child(1)");
