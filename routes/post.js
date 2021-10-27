// const express = require('express')
// const router = express.Router()

// const Post = require('../models/customer')


// router.get('/', verifyToken, async (req, res) => {
// 	try {
//         const list = await Customer.find().exec();
// 		res.json({ success: true, posts })
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).json({ success: false, message: 'Internal server error' })
// 	}
// })


// router.post('/', verifyToken, async (req, res) => {
// 	const { title, description, url, status } = req.body

// 	if (!title)
// 		return res
// 			.status(400)
// 			.json({ success: false, message: 'Title is required' })

// 	try {
// 		const newPost = new Post({
// 			title,
// 			description,
// 			url: url.startsWith('https://') ? url : `https://${url}`,
// 			status: status || 'TO LEARN',
// 			user: req.userId
// 		})

// 		await newPost.save()

// 		res.json({ success: true, message: 'Happy learning!', post: newPost })
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).json({ success: false, message: 'Internal server error' })
// 	}
// })


// router.put('/:id', verifyToken, async (req, res) => {
// 	const { title, description, url, status } = req.body

// 	// xac nhan
// 	if (!title)
// 		return res
// 			.status(400)
// 			.json({ success: false, message: 'Title is required' })

// 	try {
// 		let updatedPost = {
// 			title,
// 			description: description || '',
// 			url: (url.startsWith('https://') ? url : `https://${url}`) || '',
// 			status: status || 'TO LEARN'
// 		}

// 		const postUpdateCondition = { _id: req.params.id, user: req.userId }

// 		updatedPost = await Post.findOneAndUpdate(
// 			postUpdateCondition,
// 			updatedPost,
// 			{ new: true }
// 		)
		
// 		if (!updatedPost)
// 			return res.status(401).json({
// 				success: false,
// 				message: 'Post not found or user not authorised'
// 			})

// 		res.json({
// 			success: true,
// 			message: 'Excellent progress!',
// 			post: updatedPost
// 		})
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).json({ success: false, message: 'Internal server error' })
// 	}
// })

// router.delete('/:id', verifyToken, async (req, res) => {
// 	try {
// 		const postDeleteCondition = { _id: req.params.id, user: req.userId }
// 		const deletedPost = await Post.findOneAndDelete(postDeleteCondition)

// 		if (!deletedPost)
// 			return res.status(401).json({
// 				success: false,
// 				message: 'Post not found or user not authorised'
// 			})

// 		res.json({ success: true, post: deletedPost })
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).json({ success: false, message: 'Internal server error' })
// 	}
// })

// module.exports = router
