# State Management

## Layers
*  UI Layer
*  Data Layer

### UI Layer
* Presentation layer visible on the webpage.
* Anything you see on the webpage is called UI Layer. 
* UI Layer is Controlled by the Data Layer. 

### State
* Local State
    - Component State => Any dynamic data in your component.
    - Local State have Component level scope.
* Prop
    - Parent sends data to children is called passing props.
    - Data passed between parent and child components. 
    - Uni-directional: flows from parent to child.
    - Parent can send data to Children via props, but children cannot send data to Parent. This is called Uni-directional data flow.
    - Enables component communication.
* Prop drilling
    - Grand sends data to Parent then Parent sends data to Child,...etc is called
    props drilling.
* Global State
   - we can avoid the props drilling with the help of Global State(Redux
    Toolkit).
   - sibling components cannot share the data each other. Here, we can do Lifting state up, then pass data to sibling component.
   - Context API is a react global state. Context API cannot give any debug
    tools.


 
