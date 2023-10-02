export type Main_Window_API = {
  /**
   * sends a message through channel A
   * 
   * @param msg - the message you want to send
   */
  closeWindow: () => void,
  /**
   * puts a callback on messages sent from main through channel B
   * 
   * @param func 
   */
  receiveFromB: (func: Function) => void,
};