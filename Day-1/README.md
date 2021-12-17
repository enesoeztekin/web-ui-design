# User Profile UI
This is the first day's project of my 'every day, a new web ui design' journey.

### Use in your project easily!
All you need to do:

1) Copy this code and paste it into the place you want to use in your HTML file. 
```
<div class="component">
        <div class="profile-img">
            <img src="./img/pp.jpg" alt="Profile Image">
        </div>
        <div class="fullname">Enes Öztekin</div>
        <div class="title">
            <p>Freelancer<span>Frontend Developer</span></p>
        </div>
        <div class="buttons">
            <button class="btn btn-follow">Follow</button>
            <button class="btn btn-send-msg">Send Message</button>
        </div>
</div>
```
2) Copy the CSS code, and paste it in your CSS file connected to the HTML part.

```
.component {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 486px;
  height: 458px;
  background: white;
  border-radius: 40px;
  box-shadow: 0px 43px 50px -50px rgba(34, 0, 111, 0.17);
}

.component .profile-img {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(246, 242, 255, 0.5);
  max-width: 151px;
  min-height: 151px;
  height: auto;
  border-radius: 20px;
}

.component .profile-img img {
  width: 80%;
  border-radius: 20px;
  box-shadow: 0px 19px 25px -15px rgba(59, 33, 119, 0.32);
}

.component .fullname {
  font-size: 25px;
  font-weight: 800;
}

.component .title {
  font-size: 16px;
  text-align: center;
}

.component .title span {
  display: block;
  font-weight: 300;
}

.component .buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
}

.component .btn {
  position: relative;
  width: 186px;
  height: 54px;
  border: none;
  border-radius: 35px;
  font-size: 16px;
  padding-left: 50px;
  text-align: start;
  transition: all 300ms ease-in;
  cursor: pointer;
}

.component .btn-follow {
  background: linear-gradient(to right, #fa3967, #fa9639);
  color: white;
  padding-left: 0;
  text-align: center;
}

.component .btn-follow:hover {
  transform: scale(0.9);
  background: linear-gradient(to left, #fa3967, #fa9639);
}

.component .btn-follow::after {
  content: "";
  background: url(img/follow.svg);
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
}

.component .btn-send-msg {
  background-color: #ffedd2;
  color: black;
}

.component .btn-send-msg:hover {
  transform: scale(0.9);
}

.component .btn-send-msg::after {
  content: "";
  background: url(img/msg.svg);
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
}
```
Then, edit the parts you want to change such as 'Profile Image', fullname, title, etc.

<strong>Preview (Mobile): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-1/Design/Day-1-User-Profile-UI.png)

<strong>Preview (Desktop): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-1/Design/Day-1-User-Profile-UI-Desktop.png)

If you like this simple UI, please leave a star to my repo.
