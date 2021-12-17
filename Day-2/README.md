# Search UI

Search UI for cryptocurrencies in dark mode is my second day's project of my 'Every day, new UI design' journey. You can use this UI by changing its texts and implementing into your project.

### Use in your project easily!

All you need to do:

1. Copy this code and paste it into the place you want to use in your HTML file.

```
<!-- Component -->
    <div class="component">
        <div class="component--container">
            <div class="secondary-title">All Currencies / Crypto</div>
            <div class="primary-title">All Currencies / Crypto</div>
            <div class="search-bar">
                <input type="text" class="search-bar" placeholder="Search hundreds of cryptocurrencies...">
                <img src="img/search-icon.svg" alt="">
            </div>
            <div class="tags">
                <div class="tag">BTC</div>
                <div class="tag">WIN/USDT</div>
                <div class="tag selected">FLOKI/USDT</div>
                <div class="tag">BTC/ETH</div>
                <div class="tag">KISHU</div>
                <div class="tag">USDT</div>
                <div class="tag">HOT/USDT</div>
                <div class="tag">LUNA/USDT</div>
                <div class="tag">HAMSTER/USDT</div>
                <div class="tag">ETH</div>
                <div class="tag">USDT/TRY</div>
            </div>
        </div>
    </div>
<!-- Component -->
```

2. Copy the CSS code, and paste it in your CSS file connected to the HTML part.

```
.component {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1017px;
  height: 562px;
  max-width: 1017px;
  max-height: 562px;
  border: #242c3d solid 15px;
  border-radius: 30px;
  background-color: #111620;
  color: #9ab7ef;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

.component .component--container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 10%;
  width: 100%;
}

.component .primary-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.component .search-bar {
  position: relative;
  width: 100%;
}

.component .search-bar input {
  width: 100%;
  background-color: #161c27;
  color: #9ab7ef;
  border: 1px solid #5083e0;
  padding: 25px 25px 25px 80px;
  outline: 0px;
  font-size: 16px;
}

.component .search-bar input::placeholder {
  color: #7a90bb;
}

.component img {
  display: inline-block;
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  left: 20px;
}

.component .tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

.component .tags .tag {
  background-color: #142037;
  padding: 12px;
  border-radius: 25px;
  cursor: pointer;
}

.component .tag.selected {
  background-color: #92b6ff;
  color: #111620;
}

@media (max-width: 500px) {
  .component {
    border: 3px solid #242c3d;
    font-size: 80%;
  }
  .component .component--container {
    padding: 0 3%;
  }
  .component .search-bar input {
    font-size: 0.75rem;
  }
}
```

Then, edit the parts you want to change such as 'Tags', primary-title, secondary-title, etc.

3. Add those code below into your HTML file. (To right before `</body>` tag.)

```
<script>
  //Don't forget to change selectors' expressions such as ".tags .tag", if you want to change class names in your DOM.
  const tags = [...document.querySelectorAll(".tags .tag")];
  let selectedTag = document.querySelector(".tag.selected");
  const searchInput = document.querySelector(".search-bar input");

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      selectedTag.classList.remove("selected");
      tag.classList.toggle("selected");
      selectedTag = tag;
    });
  });

  searchInput.addEventListener("input", getTag);

  function getTag() {
    tags.filter((tag) => {
      tag.textContent.includes(searchInput.value)
        ? ((tag = tag), (tag.style.display = "block"))
        : (tag.style.display = "none");
    });
  }
</script>
```

I've used JS to make the tags switchable when clicked. For example:

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-2/Design/Day-2-Switchable-Tags.gif)

Also, used JS to list the tags contains user's input. As you can see in the below:

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-2/Design/Day-2-Listing-Tags.gif)

<strong>Preview (Mobile): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-2/Design/Day-2-Cryptocurrencies-Search-UI-Mobile.png)

<strong>Preview (Desktop): </strong>

![alt text](https://github.com/enesoeztekin/web-ui-design/blob/main/Day-2/Design/Day-2-Cryptocurrencies-Search-UI-Desktop.png)

If you like this simple UI, please leave a star to my repo.
