
background = function () {
    browser.contextMenus.removeAll();
    browser.contextMenus.create({
        title: 'Search on Google for "%s"',
        contexts: ['selection'],
        onclick: function (info) {
            var queryText = info.selectionText;
            browser.tabs.create({
                url: 'https://www.google.com/search?q=' + queryText
            });
        },
    });
}

background();

browser.runtime.onMessage.addListener(function(message){
    if(message.options)
        background();
});
