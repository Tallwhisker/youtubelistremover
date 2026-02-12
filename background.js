const pattern = "https://www.youtube.com/watch?v=*&list*"

function updateTab() {
    //Get current tab
    browser.tabs.query({url: pattern, active: true}).then((tabs) => {
        if(tabs.length > 0 && tabs[0].url)
        {
            let url = tabs[0].url;
            const listIndex = url.search("&list=");
            let newUrl = url.substring(0, listIndex);

            browser.tabs.update({
                url: newUrl
            });
            console.log("Trimmed YouTube URL of list & refreshed current tab.")
        }
        else
        {
            console.log("Did not find any list to trim.");
            return;
        };
    }, console.error)
};

// Button for running manual URL trimmer
browser.browserAction.onClicked.addListener(updateTab);
