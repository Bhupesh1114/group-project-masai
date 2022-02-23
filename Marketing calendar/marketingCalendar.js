var thorData = [{img:"https://coschedule.com/img/product/v7/marketing-calendar-2.png",text:"See everything together (finally)",summary:"Get instant clarity into all of your projects and confirm you’re working on the right priorities."},
                    {img:"https://coschedule.com/img/product/v7/marketing-calendar-3_v2.png",text:"Share your progress with higher-ups",summary:"See everything you’re working on and show your boss what you’ve accomplished in one read-only view."},
                    {img:"https://coschedule.com/img/product/v7/marketing-calendar-4.png",text:"Show what your marketing is doing",summary:"Prove the marketing you do every day makes a difference to your company."},
                    {img:"https://coschedule.com/img/product/v7/marketing-calendar-5.png",text:"Stay flexible when plans change",summary:"Make rescheduling a breeze by dragging and dropping projects right in the calendar."}] ;

                    thorData.map(function(elem,index,array){
                        //creating the child box
                        var child = document.createElement("div") ;
                        //creating parent box
                        var parent = document.createElement("div") ;
                        parent.style.marginBottom="100px" ;
                        // creating image
                        var img = document.createElement("img") ;
                        img.setAttribute("src",elem.img) ;
                        //creating h2 text
                        var heading = document.createElement("h2") ;
                        heading.innerText=elem.text ;
                        //creating p tag text
                        var summary = document.createElement("p") ;
                        summary.innerText=elem.summary ;
                          
                        child.append(heading,summary) ;
                        if(index%2==0){
                            parent.append(img,child) ;
                        }
                        else{
                            parent.append(child,img) ;
                        }
                        document.querySelector("#thor").append(parent) ;
                    }) ;