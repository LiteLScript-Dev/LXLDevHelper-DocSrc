/**
 * 
 */ 
class file {
  
/**
 * 
 * @type 
 */ 
 static readMode;
/**
 * 
 * @type 
 */ 
 static writeMode;
/**
 * 
 * @type 
 */ 
 static appendMode;
  
  


/**
 * 
 * @param {string} path 
 * @returns {string} 
 */
 static readFrom(path)

/**
 * 
 * @param {string} path 
 * @param {string} text 
 * @returns {boolean} 
 */
 static writeTo(path,text)

/**
 * 
 * @param {string} path 
 * @param {string} text 
 * @returns {boolean} 
 */
 static writeLine(path,text)

/**
 * 
 * @param {string} path 
 * @param {any} mode 文件的打开模式
 * @param {boolean} isBinary 
 * @returns {File} 
 */
 static open(path,mode,isBinary)

/**
 * 创建文件夹
 * @param {string} dir 目标文件夹的路径。可以直接创建多层，不需要逐层创建
 * @returns {boolean} 
 */
 static createDir(dir)

/**
 * 创建文件夹
 * @param {string} dir 目标文件夹的路径。可以直接创建多层，不需要逐层创建
 * @returns {boolean} 
 */
 static mkdir(dir)

/**
 * 
 * @param {string} path 
 * @returns {boolean} 
 */
 static exists(path)

/**
 * 
 * @param {string} from 
 * @param {string} to 
 * @returns {boolean} 
 */
 static copy(from,to)

/**
 * 
 * @param {string} from 
 * @param {string} to 
 * @returns {boolean} 
 */
 static move(from,to)

/**
 * 
 * @param {string} old 
 * @param {string} new 
 * @returns {boolean} 
 */
 static rename(old,new)

/**
 * 
 * @param {string} path 
 * @returns {number} 文件的大小（字节）
 */
 static getFileSize(path)

/**
 * 判断指定路径是否是文件夹
 * @param {string} path 
 * @returns {boolean} 
 */
 static checkIsDir(path)

/**
 * 列出指定文件夹下的所有文件 / 文件夹
 * @param {} dir 
 * @returns {string[]} 
 */
 static getFilesList(dir)  



}
