# wyh*
*Wash Your Hands

(the world's most viral app)

wyh was built as a 2hr project at [Socratic Bananas](http://www.fullstackacademy.com/) in the heady days of the COVID-19 outbreak

* [Monica He](https://www.linkedin.com/in/ehacinom)
* [Syed Tousif Ahmed](http://syed-ahmed.github.io/)
* [Raj Tyagi](https://www.linkedin.com/in/raj-tyagi-257956149/)

### Clearing cache
```
watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-*
rm -rf $TMPDIR/metro-bundler-cache-* && rm -rf node_modules/
npm cache verify && yarn
npm start -- --reset-cache

```
