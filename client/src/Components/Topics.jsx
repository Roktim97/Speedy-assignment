import { useSelector, useDispatch } from "react-redux";
import { SetTopics, DeleteTopic } from "../store/actions";
import { useEffect } from "react";
import Button from "./button";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Topic = (prop) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.topics)


    useEffect(()=>{
        dispatch(SetTopics(prop.data))
    },[prop,dispatch])

    const deleteFunc = (id) =>{
        dispatch(DeleteTopic(id))
    }

    const handleWriteButtonClick = (prop) => {
        navigate('/blog-editor',{prop});
    };

    return (
        <>
          {
            data.length!==0 && data.map((element,index)=>(
                <div className="topicList" key={index}>
                    <div>
                        <div>{element.topic}</div>
                        <div className="keywords">{element.keywords.map((ele,index)=>(
                            <span className={`keyword${index%3}`}
                             key={index}>{ele}</span>
                        ))}</div>
                    </div>
                    <div className="btns">
                        <Button data={{title: "Write", onclick: ()=>handleWriteButtonClick(element)}}/>
                        <MdDelete className="delete" onClick={()=>deleteFunc(element._id)}/>
                    </div>
                </div>
            ))
          }
        </>
    )
}

export default Topic