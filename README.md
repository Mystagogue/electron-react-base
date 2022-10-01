# electron-react-base
boilerplate for electron with react projects

This project is electron with react

It is split into main-process and render-process

Themain process has the elctron code and includes the entry point for any windows, 
so it will have index.html for the entry point for the main window to render.

All react coee is in the render process. It is injected into index.html from webpack.

Event though index.html is presentation layer I have put it in the main-process file as it 
is the only file that electron interacts with. 

If you want to add a window using the main process then you can add the entry point HTML fiel also in main-process.

React has client side routing established with hashRouter so the main window can be used to render many views.

There is also a global state.

The global state is split between a dispatch context and a read context

the purpose being many components need to read from state but only a few need to update it.

So they are diferent contexts.
