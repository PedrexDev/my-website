# My Website

The complete source code of my website, which you can find [here](https://pedrex.xyz/).


## How to run it

It's really simple! All you really need to do is to download the .zip file.
Then easily run this command (you'll have to install NodeJS to your system):

```bash
  npm install
```

After installation of the needed dependencies, you can easily run this command:

```bash
  node .
```

Voilà! Website is ready and running on port 80. (just simply type localhost into the browser)


## FAQ

#### Can I use it aswell?

Yes, of course! But you must have this in the footer of the page:

```html
  Made by <a href="https://pedrex.com/">Pedrex</a>.
```

#### How can I add other pages?

Nothing complicated! For those who are new to web development, let me explain.
In the `html` folder there is already a pre-created `template.html` file that you can use for whatever you want. But for this file to be fully functional, this line of code must be added to `index.js`:

```js
app.get('/any-endpoint-path-you-want', (req, res) => { 
    res.sendFile(path.join(__dirname, '/html/template.html'));
});
```

Now if you open `http://localhost/any-endpoint-path-you-want`, you should see `template.html` right in front of you.

#### I have some more questions...

Open an issue in Issues tab, I'll answer it in a few days.

## Do you have something to optimize the page with?

I'll be happy for the site optimization, pull requests are fully open to you! I will go through them all and select the ones that really optimize the code!

## License

[MIT](https://choosealicense.com/licenses/mit/)