# Sharer
In this module we will create an app which will be able to share a URL with text on facebook messenger and many more platforms<br/>
Also visit <a href = "https://www.npmjs.com/package/react-share">this page</a> for more details and ugrades

## Steps to follow
- npm install react-share --save
- import all the components you need 
```
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
```
- Props to these buttons are different which are specified precisely in the link above
- Import all the show buttons you need
- Props for show button are also available in the website
- Example of facebook show button is
```
<FacebookShareButton
    quote="Rahul"
    url="https://github.com/Rahulshamdasani/Java-Learnings"
    hashtag="https://github.com/Rahulshamdasani/Java-Learnings"
>
    <FacebookIcon size={32} round />
</FacebookShareButton>
```