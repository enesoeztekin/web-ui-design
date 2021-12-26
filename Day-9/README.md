# New Message UI

Welcome to my 'new day new design' journey!
This is New Message UI, which is the 9th day's project of my journey.

Demo -> https://enesoeztekin.github.io/web-ui-design/Day-9

### Use in your project easily!

All you need to do:

1. Copy this code and paste it into the place you want to use in your HTML file.

```
<!-- New Message UI Component -->
    <div class="component">
        <div class="top">
            <h3 class="title">New Message</h3>
            <div class="close">&times;</div>
        </div>
        <input class="search" placeholder="Type to search user">
        <h4>Recent Conversations</h4>
        <div class="users">
            <div class="user">
                <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="User" class="avatar">
                <div class="user-info">
                    <div class="name">Leta Ramirez</div>
                    <div class="username">leta.ramirez</div>
                </div>
                <div class="selection"></div>
            </div>
            <div class="user">
                <img src="https://randomuser.me/api/portraits/men/91.jpg" alt="User" class="avatar">
                <div class="user-info">
                    <div class="name">Darren Schmidt</div>
                    <div class="username">darrenn.schmidt.1</div>
                </div>
                <div class="selection selected"></div>
            </div>
            <div class="user">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" class="avatar">
                <div class="user-info">
                    <div class="name">Felix Davis</div>
                    <div class="username">davis.felix</div>
                </div>
                <div class="selection"></div>
            </div>

            <div class="user">
                <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="User" class="avatar">
                <div class="user-info">
                    <div class="name">Marjie Sullivan</div>
                    <div class="username">marjie_sullivan</div>
                </div>
                <div class="selection"></div>
            </div>
        </div>
    </div>
<!-- New Message UI Component -->
```

2. Copy the CSS code, and paste it in your CSS file connected to the HTML part.

```
.component {
  font-size: 0.75rem;
  font-family: "Poppins", sans-serif;
  background-color: white;
  padding: 1.5rem;
  box-shadow: 0px 4px 15px 2px rgba(194, 194, 194, 0.3);
}

.component .top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.component .top .close {
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
}

.component .search {
  margin: 1rem 0;
  padding: 1rem 1rem 1rem 4.3rem;
  border: 1px solid #e1e8f2;
  background-color: #f4f6fa;
  background: url("img/search-icon.svg") no-repeat 0.75rem;
  background-size: 22px;
  color: #899bb8;
  outline: none;
}

.component .search::placeholder {
  color: #899bb8;
}

.component > h4 {
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: 900;
  letter-spacing: 0.6px;
  margin-bottom: 1rem;
}

.component .users {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.component .users .user {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
}

.component .users .user:hover {
  background-color: #f4f6fa;
}

.component .users .user .avatar {
  height: 40px;
  border-radius: 50%;
}

.component .users .user .user-info {
  max-width: 180px;
  width: 165px;
  text-align: start;
  line-height: 1.3;
  padding: 0 3rem 0 1rem;
}

.component .users .user .user-info .name {
  font-weight: bold;
}

.component .users .user .user-info .username {
  font-weight: 200;
}

.component .users .user .selection {
  height: 21px;
  width: 21px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #e1e8f2;
}

.component .users .user .selection.selected {
  border: 2px solid rgb(0, 115, 209);
  background: url("img/tick.svg") no-repeat center;
  background-size: 12px;
  background-color: rgb(0, 115, 209);
}

```

Then, edit the text and buttons' function as you desire.

<strong>Preview: </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-9/Design/Day-9-New-Message-UI.png)

If you like this simple UI, please leave a star to my repo.
