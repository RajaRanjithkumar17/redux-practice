
export const initialState=
{

  age :22,
  name:"ranjith"
  // demo:["ranjth"]

 
 
}
export const stateReducer = (state, action) => {
  console.log("action", state, action);
  if (action.type === "upd") {
    console.log("nn");
    return {
      demo: action.payload,
    };
  }

};
