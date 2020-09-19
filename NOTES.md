## Build package for local test

```bash
ng build ng-selectize --prod
cd dist/ng-selectize
npm pack

// Copy .tgz to demo
cp ng-selectize-2.0.0.tgz ../../../ng-selectize-demo/

// update package.json to "ng-selectize": "file:ng-selectize-2.x.x.tgz"
npm i
ng serve
```
