# Redux
Just making a simple and complex Redux app with some notes
# Redux App Examples

https://github.com/Iandecisiv/Redux


## Project Author
[Ian Tucker](https://github.com/Iandecisiv)

## Redux Notes

+ Doing a massive refactor of your state is fraught with peril, so having an effective state management system that is able to scale as your project grows is important to implement from the start.

+ Array.push is 945 times faster than array.concat but unfortuantly is not viable for immutable data structures

+ Within our store, type can be anything that is used to convey what has happened, it is a object
    + You can not make your type "@@redux/INIT" 

+ type: 'ADD', payload: {}, meta: {}
    + meta is not often used but can be used to pass meta data 

+ 