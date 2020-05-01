function attempt(available,allowed,preferred) {
    list=[]
    k,count=0,len(preferred)
    if (not) set(available)&set(allowed) 
        return list
    
    if ("any" in preferred) {
        if ("any" in allowed) {
            list=available
        }
        else {
            for (i in available)
                if (i in allowed) 
                    list.append(i)
          else {
        if ("any" in allowed) {
            if (set(preferred)&set(available)==set(preferred)){
                list=set(preferred)
            
            

            } else {
                length=len(set(preferred)&set(available))-len(set(preferred))
                only_available=list(set(available)-set(preferred))
                list=sorted(list(set(preferred)&set(available))+only_available[length])
             }
              }  else {
            for (i in available) {
                if (i in allowed) and (i in preferred)
                    list.append(i)
            }
                }
                
            }
        }
    
                    if (not (list)) {
                list.append(allowed[-1])
    return list
                    }
            }

attempt([240,360,720],[360,720],[1080])
attempt([240,720],[360,720],[1080])
attempt([240],[360,720],[1080])
attempt([240,360,720],[240,360,720,1080],[240,360])
attempt([240,720],[240,360,720,1080],[240,360])
attempt([],[],[])
attempt([],[],[])
attempt([],[],[])
attempt([],[],[])
attempt([],[],[])
attempt([240,360,720],[240,360,720],["any",720])
attempt([],[],[])
attempt([],[],[])
attempt([],[],[])
set([3,5,7])-set([1,2,3,4,5])
len(set([1,2,3,5])-set([2,4,5]))
   
}
 