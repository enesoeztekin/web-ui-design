# Notifications UI

Welcome to my 'new day new design' journey!
This is the Notifications UI, which is the fifth day's project of my journey.

Demo -> https://enesoeztekin.github.io/web-ui-design/Day-5

How it looks:

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-5/Design/Day-5-Notification-UI-Preview.gif)

### Use in your project easily!

All you need to do:

1. Copy this code and paste it into the place you want to use in your HTML file.

```
<!-- Notifications UI Component -->
    <div class="component">
        <div class="notification-icon" onclick="document.querySelector('.main').classList.toggle('visible')"></div>
        <div class="main">
            <h1>Notifications</h1>
            <div class="row">
                <div class="col-2">
                    <img class="avatar" src="./img/user1.jpg" alt="User 1">
                </div>
                <div class="col-10">
                    <div class="title"><span>Enes Öztekin</span> has sent you a friendship request.</div>
                    <div class="time-ago">An hour ago</div>
                    <div class="buttons">
                        <button class="btn btn-decline">Decline</button>
                        <button class="btn btn-accept">Accept</button>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-2">
                    <img class="avatar" src="./img/user2.jpg" alt="User 2">
                </div>
                <div class="col-10">
                    <div class="title"><span>Sherry Martinez</span> made you an editor in the team.</div>
                    <div class="time-ago">Yesterday</div>
                </div>
            </div>
        </div>
    </div>
    <!-- Notifications UI Component -->
```

2. Copy the CSS code, and paste it in your CSS file connected to the HTML part.

```
.component {
  display: flex;
  flex-direction: column;
  color: #0b1641;
  font-family: "Poppins", sans-serif;
}

::selection {
  background-color: #c13261;
  color: white;
}


.visible {
  visibility: visible !important;
}

.component img {
  width: 100%;
}

.component .avatar {
  border-radius: 50%;
}

.component hr {
  border: 0px;
  border-top: 1px solid #a2a1b4;
  margin: 3rem 0;
}

.component .notification-icon {
  height: 75px;
  width: 75px;
  margin-bottom: 1rem;
  border-radius: 6px;
  background-image: url("img/notification.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-color: #c13261;
  box-shadow: 5px 5px 15px 0px rgba(193, 50, 97, 0.5),
    -5px -5px 15px 0px rgba(255, 255, 255, 1);
  align-self: flex-end;
  cursor: pointer;
}

.component .notification-icon:hover {
  visibility: visible;
}

.component .main {
  padding: 3rem 3rem;
  background-color: #fff9f9;
  border-radius: 16px;
  box-shadow: 0 4px 15px 0px rgba(67, 67, 67, 0.25);
  visibility: hidden;
}

.component .main h1 {
  margin-bottom: 3rem;
}

.component .main .title {
  max-width: 220px;
  padding-top: 0.5rem;
  margin-bottom: 1rem;
}

.component .main .title span {
  font-weight: bold;
}

.component .main .time-ago {
  color: rgba(176, 176, 176, 0.6);
}

.component .main .buttons {
  margin-top: 1rem;
}

.component .main .buttons .btn {
  cursor: pointer;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
}

.component .main .buttons .btn.btn-decline {
  background: none;
  border: 1px solid rgba(22, 21, 68, 0.4);
}

.component .main .buttons .btn.btn-accept {
  background-color: #c13261;
  color: white;
  border: none;
  margin-left: 1rem;
}

.component .main .buttons .btn.btn-accept:hover {
  background-color: #b32554;
}

/* Layout Selectors */
.component .main .row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.component .main .col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.component .main .col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
/* Layout Selectors */

/* Media Queries */
@media (max-width: 440px) {
  .component .main .title {
    padding: 0;
  }
  .component .main .buttons .btn {
    padding: 0.5rem 1rem;
  }
  .component .notification-icon {
    height: 60px;
    width: 60px;
  }
}
/* Media Queries */
```

Then, edit the text and buttons' function as you desire.

<strong>Preview (Mobile): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-5/Design/Day-5-Notification-UI-Mobile.png)

<strong>Preview (Desktop): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-5/Design/Day-5-Notification-UI-Desktop.png)

If you like this simple UI, please leave a star to my repo.
