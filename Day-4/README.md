# Feedback Card UI

Welcome to my 'new day new design' journey!
This is the Feedback Card UI, which is the fourth day's project of my journey.

Demo -> https://enesoeztekin.github.io/web-ui-design/Day-4

### Use in your project easily!

All you need to do:

1. Copy this code and paste it into the place you want to use in your HTML file.

```
<!-- Feedback UI Component -->
    <div class="component">
        <h3>What do you think of this Feedback UI?</h3>
        <div class="actions">
            <div class="btn btn-like"
                onclick="this.classList.toggle('pressed'), document.querySelector('.btn-dislike').classList.remove('pressed')">
            </div>
            <div class="btn btn-dislike"
                onclick="this.classList.toggle('pressed'), document.querySelector('.btn-like').classList.remove('pressed')">
            </div>
        </div>
    </div>
<!-- Feedback UI Component -->
```

2. Copy the CSS code, and paste it in your CSS file connected to the HTML part.

```
.component {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding: 1rem;
  box-shadow: 0px 30px 35px 0px rgba(174, 123, 169, 0.15);
  border-radius: 25px;
  background-color: white;
  width: 557px;
  height: 206px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.component h3 {
  font-size: 1.5rem;
  color: #151757;
  max-width: 250px;
}

.component .actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.component .actions .btn {
  height: 78px;
  width: 78px;
  border: 1px solid #ececf9;
  border-radius: 10px;
  cursor: pointer;
}

.actions .btn-like {
  background: url("img/like.svg") no-repeat center;
}

.btn-like.pressed {
  background: url("img/like-pressed.svg") no-repeat center;
  background-color: #151757;
}

.actions .btn-dislike {
  background: url("img/dislike.svg") no-repeat center;
}

.btn-dislike.pressed {
  background: url("img/dislike-pressed.svg") no-repeat center;
  background-color: #151757;
}

@media (max-width: 600px) {
  .component .actions {
    flex-direction: column;
  }
}
```

Then, edit the text and buttons' function as you desire.

<strong>Preview (Mobile): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-4/Design/Day-4-Feedback-UI-Mobile.png)

<strong>Preview (Desktop): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-4/Design/Day-4-Feedback-UI-Desktop.png)

If you like this simple UI, please leave a star to my repo.
