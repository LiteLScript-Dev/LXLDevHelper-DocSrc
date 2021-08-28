---获取所有数据项名字
---@class DB 
 DB = {}

---写入数据项
---@param name string 
---@param data any 
---@return boolean 
function DB:set(name,data)
end

---读取数据项
---@param name string 
---@return any 
function DB:get(name)
end

---删除数据项
---@param name string 
---@return boolean 
function DB:delete(name)
end

---获取所有数据项名字
---@return string[] 
function DB:listKey()
end

---关闭数据库
---@return  是否成功关闭
function DB:close()
end