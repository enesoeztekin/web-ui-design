# Cookies and Privacy UI

Welcome to my 'new day new design' journey!
This is the Cookies and Privacy UI, which is the 7th day's project of my journey.

Demo -> https://enesoeztekin.github.io/web-ui-design/Day-6

### Use in your project easily!

All you need to do:

1. Copy this code and paste it into the place you want to use in your HTML file.

```
<!-- Cookies and Privacy Component HTML -->
    <div class="component">
        <div class="close">&times;</div>
        <img src="cookie.PNG" alt="">
        <h2>Cookies & Privacy</h2>
        <p>We're using cookies to ensure you to get the best experience.</p>
        <div class="buttons">
            <button class="btn btn-accept">Accept All Cookies</button>
            <button class="btn btn-customize">Customize Settings</button>
        </div>
    </div>
    <!-- Cookies and Privacy Component HTML -->
```

2. Copy the CSS code, and paste it in your CSS file connected to the HTML part.

```
.component {
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  box-shadow: 0px 4px 12px 2px rgba(70, 70, 70, 0.2);
  max-width: 350px;
  min-height: 350px;
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border-radius: 20px;
  text-align: center;
  padding: 3rem;
  word-spacing: -1px;
  animation: slide-to-right 800ms ease-in-out forwards;
  box-sizing: border-box;
}

.component .close {
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 1rem;
  cursor: pointer;
}

/* This selector will be added into component div to slide it to the left. */
.component.disable {
  animation: slide-to-left 800ms ease-in-out forwards;
}

/* This too */
.component.accepted {
  animation: fade-out 800ms ease-in-out forwards;
}

.component img {
  width: 80px;
  animation: cookie 5s linear infinite;
}

@keyframes cookie {
  0% {
    transform: rotate(360deg);
  }
}

@keyframes slide-to-right {
  0% {
    transform: translateX(calc(-100% - 3rem));
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-to-left {
  100% {
    transform: translateX(calc(-100% - 3rem));
  }
}

@keyframes fade-out {
  99% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

.component h2 {
  margin-top: 1rem;
}

.component p {
  margin: 1rem 0;
  font-weight: 300;
}

.component .buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.component .buttons .btn {
  border: 0;
  border-radius: 20px;
  padding: 0.75rem 0;
  cursor: pointer;
}

.component .buttons .btn:hover {
  opacity: 0.9;
}

.component .buttons .btn-accept {
  background-color: rgb(228, 148, 0);
  color: #fff;
}

.component .buttons .btn-customize {
  background-color: transparent;
  color: rgb(70, 70, 70);
}
```

Also add the JS script code above your `</body>` closing tag.

```
<!-- Component JS Code -->
    <script>
        const closeButton = document.querySelector(".close");
        const acceptButton = document.querySelector(".btn-accept");
        const component = document.querySelector(".component");

        closeButton.addEventListener("click", () => {
            component.classList.add("disable");
        });

        acceptButton.addEventListener("click", () => {
            component.classList.add("accepted");
        });
    </script>
<!-- Component JS Code -->
```

Then, edit the text and buttons' function as you desire.

<strong>Preview (Mobile): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-7/Design/Day-7-Cookies-and-Privacy-UI-Mobile.png)

<strong>Preview (Desktop): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-7/Design/Day-7-Cookies-and-Privacy-UI-Desktop.png)

If you like this simple UI, please leave a star to my repo.
