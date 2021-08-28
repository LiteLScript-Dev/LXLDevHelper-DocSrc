---
---@class file 
---@field readMode  
---@field writeMode  
---@field appendMode  
 file = {}

---
---@param path string 
---@return string 
function file.readFrom(path)
end

---
---@param path string 
---@param text string 
---@return boolean 
function file.writeTo(path,text)
end

---
---@param path string 
---@param text string 
---@return boolean 
function file.writeLine(path,text)
end

---
---@param path string 
---@param mode any 文件的打开模式
---@param isBinary boolean 
---@return File 
function file.open(path,mode,isBinary)
end

---创建文件夹
---@param dir string 目标文件夹的路径。可以直接创建多层，不需要逐层创建
---@return boolean 
function file.createDir(dir)
end

---创建文件夹
---@param dir string 目标文件夹的路径。可以直接创建多层，不需要逐层创建
---@return boolean 
function file.mkdir(dir)
end

---
---@param path string 
---@return boolean 
function file.exists(path)
end

---
---@param from string 
---@param to string 
---@return boolean 
function file.copy(from,to)
end

---
---@param from string 
---@param to string 
---@return boolean 
function file.move(from,to)
end

---
---@param old string 
---@param new string 
---@return boolean 
function file.rename(old,new)
end

---
---@param path string 
---@return number 文件的大小（字节）
function file.getFileSize(path)
end

---判断指定路径是否是文件夹
---@param path string 
---@return boolean 
function file.checkIsDir(path)
end

---列出指定文件夹下的所有文件 / 文件夹
---@param dir  
---@return string[] 
function file.getFilesList(dir)
end