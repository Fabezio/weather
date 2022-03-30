<ul class="brand">
    <li>
        <img src="favicon.png" height="32" alt="">
    </li>
    <li>

        <a href="/">
            basic template
        </a>
    </li>
</ul>

<style lang="scss" >
.brand {

  padding: 0 12px;
  margin: 0;
  height: 3em;
  display: flex;
  justify-self: start;
  justify-content: center;
  align-items: center;
  list-style: none;

  background-size: contain;
  img {
    padding: 8px 0;
  }
  a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 12px;

    font-weight: 100;

    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }
}


ul {
  position: relative;
  padding: 0;
  margin: 0;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  background-size: contain;
}

li {
  position: relative;
  height: 100%;
}


a:hover {
  color: var(--light-txt);
}
</style>
