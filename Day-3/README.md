# Event Card UI

Event Card UI, is the third day's project of my 'new day new design' journey.

Demo -> https://enesoeztekin.github.io/web-ui-design/Day-3

### Use in your project easily!

All you need to do:

1. Copy this code and paste it into the place you want to use in your HTML file.

```
<!-- Event Card UI -->
    <div class="component">
        <div class="component__background">
            <div class="card">
                <div class="top">
                    <h4 class="event-date">Wed, May 25, 2022 ・8:00 GMT</h4>
                    <h2 class="event-name">Hitchhiker's <span>Towel Day</span></h2>
                    <h3 class="event-location">London</h3>
                </div>
                <div class="bottom">
                    <div class="attendees-detail">
                        <img src="./img/attendee-1.svg" alt="Attendee 1">
                        <img src="./img/attendee-2.svg" alt="Attendee 2">
                        <img src="./img/attendee-3.svg" alt="Attendee 3">
                        <p class="count">+1,3k</p>
                    </div>
                    <button class="btn btn-attend">I'm Attending</button>
                </div>

            </div>
        </div>
    </div>
<!-- Event Card UI -->
```

2. Copy the CSS code, and paste it in your CSS file connected to the HTML part.

```
/* ======= Component CSS Code Starts ======= */
.component {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}

.component .component__background {
  background-color: #333f6b;
  padding: 2rem;
  border-radius: 20px;
}

.component .card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  background-color: #ffd0d0;
  padding: 3rem;
  border-radius: 20px;
}

.card .top {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  row-gap: 1rem;
}

.top .event-date {
  font-size: 0.9rem;
  color: #434f7a;
}

.top .event-name {
  color: #323f6b;
}

.event-name span {
  display: block;
  clear: both;
}

.top .event-location {
  color: #323f6b;
  font-size: 1rem;
  padding-left: 3rem;
  background: url("img/location.svg") no-repeat 0;
}

.card .bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 5rem;
}

.bottom .attendees-detail {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 170px;
  height: 50px;
  max-width: 170px;
  max-height: 50px;
}

.attendees-detail img {
  position: absolute;
  border-radius: 50%;
  border: 3px solid #ffd0d0;
}

.attendees-detail img:nth-child(2) {
  left: 2.5rem;
}

.attendees-detail img:nth-child(3) {
  left: 5rem;
}

.attendees-detail .count {
  position: absolute;
  right: -0.25rem;
  font-size: 0.9rem;
  font-weight: 300;
}

.bottom .btn {
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  border: none;
  padding: 0 3rem;
  cursor: pointer;
}

/* Default button */
.btn.btn-attend {
  background-color: #434f7a;
  color: white;
  font-weight: 100;
}

/* When user clicked "btn-attend" button,
this class will be assigned into button element. */
.btn.btn-attended {
  color: #c5c5c5;
  font-weight: 300;
  text-indent: 20px;
  background: url("img/tick.svg") no-repeat 0;
  background-color: #434f7a;
  background-position-x: 1.25rem;
}

/* Media Queries */
@media (max-width: 632px) {
  .card .bottom {
    gap: 3rem;
  }
}

@media (max-width: 560px) {
  .card .bottom {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .bottom .btn {
    height: 50px;
  }
}

@media (max-width: 382px) {
  .component .component__background {
    padding: 0.5rem;
  }
}
/* ======= Component CSS Code Ends ======= */
```

Then, edit the parts you want to change such as event-date, event-name, event-location, etc.

3. Add those JS code below into your HTML file. (To right before `</body>` tag.)

```
<script>
        const button = document.querySelector(".btn");

        //To switch "Attended" and "I'm Attending" buttons, when they clicked.
        button.addEventListener("click", () => {
            if (button.classList.contains("btn-attended")) {
                button.classList.remove("btn-attended");
                button.classList.add("btn-attend");
                button.innerHTML = "I'm Attending";
            } else {
                button.classList.remove("btn-attend");
                button.classList.add("btn-attended");
                button.innerHTML = "Attended";
            }
        });
</script>
```

I've used JS to make the button switchable to "Attended" when clicked. For example:

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-3/Design/Day-3-Event-Card-UI.gif)

<strong>Preview (Mobile): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-3/Design/Day-3-Event-Card-UI-Mobile.png)

<strong>Preview (Desktop): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-3/Design/Day-3-Event-Card-UI-Desktop.png)

If you like this simple UI, please leave a star to my repo.
