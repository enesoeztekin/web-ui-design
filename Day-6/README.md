# Spotify Lyrics Card UI

Welcome to my 'new day new design' journey!
This is the Lyrics Card UI, which is the sixth day's project of my journey.

Demo -> https://enesoeztekin.github.io/web-ui-design/Day-6

### Use in your project easily!

All you need to do:

1. Copy this code and paste it into the place you want to use in your HTML file.

```
<!-- Lyrics Card UI Component -->
    <div class="component">
        <div class="top">
            <div class="row">
                <h2>Lyrics</h2>
                <div class="expand"></div>
            </div>
            <p>Strangers In The Night</p>
        </div>
        <div class="lyrics">
            <div class="lyric on">Strangers in the night exchanging glances</div>
            <div class="lyric">Wondering in the night What were the chances we'd be sharing love</div>
            <div class="lyric">Before the night was through</div>
        </div>
    </div>
<!-- Lyrics Card UI Component -->
```

2. Copy the CSS code, and paste it in your CSS file connected to the HTML part.

```
.component {
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  max-width: 439px;
  padding: 3rem;
  border-radius: 30px;
  background-color: #ff5f85;
  box-shadow: 0 4px 15px 3px rgba(255, 95, 133, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
}

.component .top .row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.component .top .row h2 {
  color: white;
}

.component .top .row .expand {
  width: 27px;
  height: 27px;
  background-color: rgba(0, 0, 0, 0.3);
  background-image: url(/img/expand.svg);
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 300ms ease-in;
}

.component .top .row .expand:hover {
  transform: scale(1.1);
}

.component .top p {
  font-size: 0.75rem;
  color: white;
  font-weight: 200;
}

.component .lyrics {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.component .lyrics .lyric {
  font-weight: bold;
  max-width: 235px;
  color: rgba(0, 0, 0, 0.3);
}

.component .lyrics .lyric.on {
  color: rgba(0, 0, 0, 1);
}
```

Then, edit the text and buttons' function as you desire.

<strong>Preview (Mobile): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-6/Design/Day-6-Spotify-Lyrics-Card-UI-Mobile.png)

<strong>Preview (Desktop): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-6/Design/Day-6-Spotify-Lyrics-Card-UI-Desktop.png)

If you like this simple UI, please leave a star to my repo.
