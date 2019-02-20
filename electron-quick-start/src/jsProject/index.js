function jumpPage(pageHtml){
    window.location = pageHtml;
}

 //解析服务器发来的桩配置表（省、项目、站点、分桩）--若服务器更新桩配置表，则调用该函数解析
 function paserJson(data,province,project,station,pile){
    for (var key in data) {
      province.set(key, [])
      .write()
    var element = data[key];//根据 key 取出值
    for (var i=0;i<element.length;i++){
      var elementProvince = element[i];
     for(var keyProvince in elementProvince){   //在 province 的 value 里取 key
      province.get(key)
      .push(keyProvince)
      .write()
     // console.log(keyProvince); //解出省份保存到province.json里
      project.set(keyProvince, [])
      .write()

      var elementProject = elementProvince[keyProvince];
      for(var j=0;j<elementProject.length;j++){
       for(var keyProject in elementProject[j])
       project.get(keyProvince)
       .push(keyProject)
       .write()
      // console.log(keyProject);//解出项目保存到project.json里
       station.set(keyProject,[])
       .write()

       var elementStation = elementProject[j][keyProject]; //解出站点保存到station.json里
       console.log(elementStation);
       for(var m=0;m<elementStation.length;m++){
         for (var keyStation in elementStation[m])
       station.get(keyProject)
       .push(keyStation)
       .write()
      // console.log(keyStation);
       pile.set(keyStation,[])
       .write()
       for(n=0;n<elementStation[m][keyStation].length;n++){
         pile.get(keyStation)
         .push(elementStation[m][keyStation][n])
         .write()

       }
       }
      }
    }
    }
   
    }
    }