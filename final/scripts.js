


// console.log(collection[0].events[1]);

// _(collection).findWhere({"kind":"peeing"})


function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }




var holder = document.getElementById("holder");
            var sort = "number";
            var filter = "None";

            function emptyHolder() {
                holder.innerHTML = "";
            }

            function renderArray(arr) {
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i];
                    console.log(item);

                    var newElement = document.createElement("div");
                    newElement.innerHTML = "<img src='" + item.img + "' class='parts'>";

                    holder.appendChild(newElement);
                }
            }

            function update() {
                console.log(sort, filter);

                var sorted = _.sortBy(collection, function(p) {
                    if (sort == "Day") {
                        return p.day;
                    } else if (sort == "Number") {
                        return p.daynumber;
                    } else if (sort == "Duration") {
                        return p.duration;
                    }
                });

                var filtered = _.filter(sorted, function(p) {
                    if (filter == "None") {
                        return true;
                    } else {
                        //return p.type.indexOf(filter) >= 0;\
                        return p.kind.includes(filter);
                    }
                });


               
                    var audio = document.getElementById("flush");
                    audio.play();
                 

                
                $("#holder").animate({height: "10%", width: "10%", left: "25%", top: "50%"}, 3750, "swing", function() {
                    
                    emptyHolder();

                    $("#holder").animate({height: "0%", width: "50%", left: "10%", top: "-100%"}, 0, "swing");

                    renderArray(filtered);
                    
                    $("#holder").animate({height: "300%", width: "50%", left: "10%", top: "10%"}, 2000, "swing");
                });

                
            }

           // var temp = " ";



            document.querySelector("#one").addEventListener("click", function(e) {
                sort = e.target.innerHTML;
                update();
            });


            document.querySelector("#two").addEventListener("click", function(e) {
                sort = e.target.innerHTML;
                update();
            });

             document.querySelector("#three").addEventListener("click", function(e) {
                sort = e.target.innerHTML;
                update();
            });

            




            document.querySelector("#A").addEventListener("click", function(e) {
                filter = e.target.innerHTML;
                update();
            });

             document.querySelector("#B").addEventListener("click", function(e) {
                filter = e.target.innerHTML;
                update();
            });

              document.querySelector("#C").addEventListener("click", function(e) {
                filter = e.target.innerHTML;
                update();
            });

            update();

