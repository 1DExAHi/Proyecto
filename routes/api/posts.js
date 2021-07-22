const router = require('express').Router()
const moment = require('moment')

const { Posts } = require('../../config/db')

router.get('/', async ( req,res ) => { 
 
    const posts = await Posts.findAll(
        {
            attributes: ['id','tittle','content','image','category','createDate'],
        }
    )

    res.json(posts) 
})

router.get('/:id', async ( req,res ) => { 
 
    const posts = await Posts.findAll(
        {
            attributes: ['id','tittle','content','image','category','createDate'],
            where: {
                id: req.params.id
            }
        }
    )
    
    if(posts.length === 0){
        res.json(404)
    }else{
        res.json(posts)
    } 
})

router.post('/', async ( req,res ) => { 

    //const { usr_id } = jwt.decode(req.headers['user-token'], 'secretword')

    const { tittle , image , content, category } = req.body

    const params = {
        tittle: tittle,
        image: image,
        content: content,
        category: category,
        createDate: moment()
    }

    const post = await Posts.create(params)

    res.json(post)

})

router.patch('/:id', async ( req,res ) => { 

    //const { usr_id } = jwt.decode(req.headers['user-token'], 'secretword')

    const { tittle , image , content, category } = req.body

    const params = {
        tittle: tittle,
        image: image,
        content: content,
        category: category,
    }

    const post = await Posts.update(params,{
        where: {id: req.params.id}
    })
    
    if(post == 0 || post == false){
        res.json(404)
    }else{
        res.json(post)
    }


})

router.delete('/:id', async ( req,res ) => { 
 
    const posts = await Posts.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    
    console.log(posts)

    if(posts == 0){
        res.json(404)
    }else{
        res.json(true)
    }  
})


module.exports = router 