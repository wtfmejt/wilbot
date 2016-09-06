'use strict'

const facebook = require('../facebook.js')

exports.markAsSeen = function(recipient, callback) {
  let body = {
    recipient: recipient,
    sender_action: 'mark_seen'
  }
  facebook.sendMessage(body, callback)
}

exports.sendTypingOn = function(recipient, message, callback) {
  let text = message.text ? message.text : message.attachment.payload.text
  typingOn(recipient, () => {
    let millisPerWord = (60 * 1000) / 450
    let delay = text.split(' ').length * millisPerWord
    setTimeout(callback, delay)
  })
}

function typingOn(recipient, callback) {
  let body = {
    recipient: recipient,
    sender_action: 'typing_on'
  }
  facebook.sendMessage(body, callback)
}