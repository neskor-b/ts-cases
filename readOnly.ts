
type MyReadonly<Object> ={
    readonly [key in keyof Object]: Object[key] // key in keyof Object = 'title' | 'description'
}

interface Article {
    title: string
    description: string
}
  
const article: MyReadonly<Article> = {
    title: "Hey",
    description: "foobar"
}
  
article.title = "Hello" // Error: cannot reassign a readonly property
article.description = "barFoo" // Error: cannot reassign a readonly property