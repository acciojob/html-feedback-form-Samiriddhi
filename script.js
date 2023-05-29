//your code here
Feedback Form
<form method="post">
  <label for="name">Your name</label>
  <input type="text" id="name" minlength="3" maxlength="50" required />
  <br />
  <label for="portfolio">You portfolio</label>
  <input type="url" id="portfolio" required />
  <br />
  <label for="favColor">Your fav color</label>
  <input type="color" id="favColor" />
  <br />
  <label for="likeness">From one to hundred choose likeness</label>
  <input type="range" id="likeness" min="1" max="100" />
  <br />
  <button type="submit">Submit</button>
  <br />
  <button type="reset">Reset form</button>
</form>
