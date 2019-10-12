

/* Create UI */

let outerContainer = document.createElement('div');
outerContainer.className = "container mx-auto";

let title = document.createElement('p');
title.className = "h2 text-center mt-3";
title.innerHTML = "TuDu";

/* Create the Input From and Submit Button */
let inputItem = document.createElement('div');
inputItem.className = "input-group";
let inp = document.createElement("input");
inp.setAttribute("type", "text");
inp.setAttribute("placeholder", "Enter a to do...");
inp.className = "form-control";
let inputGroupAppend = document.createElement('div');
inputGroupAppend.className = "input-group-append";
let inputBtn = document.createElement('button');
inputBtn.className = "btn btn-primary";
inputBtn.innerHTML = "Add Item";

inputItem.appendChild(inp);
inputItem.appendChild(inputGroupAppend);
inputItem.appendChild(inputBtn);

/* Create Button Group 'Tabs' */
let tabs = document.createElement('div');
tabs.className = "btn-group mt-2 mx-auto d-block";

let allBtn = document.createElement('button');
allBtn.setAttribute("type", "button");
allBtn.className = "btn btn-light col-4";
allBtn.innerHTML = "All";
allBtn.id = "all";
let allBadge = document.createElement('span');
allBadge.className = "badge badge-primary ml-3";
allBadge.innerHTML = "4";
allBtn.appendChild(allBadge);

let activeBtn = document.createElement('button');
activeBtn.setAttribute("type", "button");
activeBtn.className = "btn btn-light col-4";
activeBtn.innerHTML = "Active";
activeBtn.id = "active";
let activeBadge = document.createElement('span');
activeBadge.className = "badge badge-primary ml-3";
activeBadge.innerHTML = "3";
activeBtn.appendChild(activeBadge);

let completeBtn = document.createElement('button');
completeBtn.setAttribute("type", "button");
completeBtn.className = "btn btn-light col-4";
completeBtn.innerHTML = "Done";
completeBtn.id = "complete";
let completeBadge = document.createElement('span');
completeBadge.className = "badge badge-primary ml-3";
completeBadge.innerHTML = "1";
completeBtn.appendChild(completeBadge);

tabs.appendChild(allBtn);
tabs.appendChild(activeBtn);
tabs.appendChild(completeBtn);



outerContainer.appendChild(title);
outerContainer.appendChild(inputItem);
outerContainer.appendChild(tabs);
app.appendChild(outerContainer);