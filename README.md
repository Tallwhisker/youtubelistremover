## YouTube List Remover

Adds a button that removes the youtube playlists and refreshes the tab.

Searches the URL for `youtube.com/watch` and if you're watching a video it then looks for `&list=`.  
If it finds a list the URL will be trimmed to remove the playlist part and **everything** after it, then it navigates to the video.

This effectively saves you the work of manually removing the unwanted bits by hand to not be annoyed by the autoplay features that are forced upon you by youtube playlists.  
Only affects the current tab and will ignore any URL that does **not** contain `youtube.com?watch`.
