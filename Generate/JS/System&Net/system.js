/**
 * ð¡ ç³»ç»è°ç¨ API
è¿äºAPIæä¾äºæ§è¡ä¸äºç³»ç»è°ç¨çæ¥å£
 */ 
class system {
  
  
  


/**
 * è°ç¨shellæ§è¡æå®ç³»ç»å½ä»¤
 * @param {string} cmd æ§è¡çç³»ç»å½ä»¤
 * @param {(exitcode:number,output:number)any} callback shellè¿ç¨ç»æä¹åè¿åæ°æ®ä½¿ç¨çåè°å½æ°
 * @param {number} timeLimit? ï¼å¯éåæ°ï¼å½ä»¤è¿è¡çæé¿æ¶éï¼åä½ä¸ºæ¯«ç§
 * @returns {boolean} æ¯å¦æåå¯å¨å½ä»¤
 */
 static cmd(cmd,callback,timeLimit)

/**
 * è¿è¡æå®ä½ç½®ç¨åº
 * @param {string} process è¿è¡çç¨åºè·¯å¾ï¼ä¸å½ä»¤è¡åæ°ï¼
 * @param {(exitcode:number,output:number)any} callback ç¨åºè¿ç¨ç»æä¹åè¿åæ°æ®ä½¿ç¨çåè°å½æ°
 * @param {number} timeLimit? ï¼å¯éåæ°ï¼ç¨åºè¿ç¨è¿è¡çæé¿æ¶éï¼åä½ä¸ºæ¯«ç§
 * @returns {boolean} æ¯å¦æåå¯å¨è¿ç¨
 */
 static newProcess(process,callback,timeLimit)

/**
 * è·åå½åæ¶é´å­ç¬¦ä¸²
 * @returns {string} å½åçæ¶é´å­ç¬¦ä¸²ï¼ä½¿ç¨å½å°æ¶åºå24å°æ¶å¶ã
 */
 static getTimeStr()

/**
 * è·åå½åçæ¶é´å¯¹è±¡
 * @returns {TimeObject} å½åçæ¶é´å¯¹è±¡
 */
 static getTimeObj()

/**
 * éæºçæä¸ä¸ª GUID å­ç¬¦ä¸²
 * @returns {string} ä¸ä¸ªéæºçæçå¯ä¸æ è¯ç¬¦GUID
 */
 static randomGuid()  



}
