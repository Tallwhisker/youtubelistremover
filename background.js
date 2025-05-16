function getUrl() {
    browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
        updateTab(tabs[0].url); //There should ever only be 1 result from current & active.
    }, console.error)
};

function updateTab(url) {
    const listIndex = url.search("&list=");
    const youtubeCheck = url.search("youtube.com/watch");

    //Don't run if there's no list or not on youtube.
    if (youtubeCheck === -1) {
        console.log("Not watching a youtube video.");
        return;
    } else if (listIndex == -1) {
        console.log("Did not find a list to remove.");
        return;
    };

    let newUrl = url.substring(0, listIndex);
    browser.tabs.update({
        url: newUrl
    });
    console.log("Removed the list and any following parameters.");
};

browser.browserAction.onClicked.addListener(getUrl);
