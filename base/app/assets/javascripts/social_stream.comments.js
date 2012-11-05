//= require jquery.autosize
//
//= require social_stream.timeline
//= require social_stream.objects

SocialStream.Comments = (function(SS, $, undefined){
	var initNew = function(){
		// show only the text fields for new comment
		// if there are any comment to the post
		$(".activity_new_comment").each(function(){
			if ($.trim($(this).siblings(".activity_comments").text()) != ""){
				$(this).show();
				$(this).find(".input_new_comments").val("");
			}
		});

		hideNewCommentElements();
		newCommentAutoSize();
		newCommentClick();
		newCommentLink();
	}

	var hideNewCommentElements = function(){
		$(".activities_comment_btn").hide();
		$(".actor_name_new_comment").hide();
		$(".actor_logo_new_comment").hide();
	}

	var newCommentAutoSize = function(){
                $(".input_new_comments").autosize();
	}

	var newCommentClick = function(){
		$(".input_new_comments").click(function(){
			$(".activities_comment_btn").hide();
			$(".new_comment").removeClass("new_comment_shown");
			$(".actor_name_new_comment").hide();
			$(".actor_logo_new_comment").hide();
			var comment= $(this).parents(".activity_new_comment");
			comment.find(".activities_comment_btn").show();
			$(this).parents(".new_comment").addClass("new_comment_shown");
			comment.find(".actor_name_new_comment").show();
			comment.find(".actor_logo_new_comment").show();
			return false;
		});
	}

	var newCommentLink = function(){
		//javascript for tocomment option
		$(".to_comment").click(function(){
			$(this).parents(".activity_content").find(".activity_new_comment").show();
			$(this)
			.closest(".activity_content")
			.find(".input_new_comments")
			.click()
			.focus()
			.val("");

		return false;
		});
	}

	SocialStream.Timeline.addInitCallback(initNew);

	SocialStream.Timeline.addCreateCallback(hideNewCommentElements);
	SocialStream.Timeline.addCreateCallback(newCommentAutoSize);
	SocialStream.Timeline.addCreateCallback(newCommentClick);
	SocialStream.Timeline.addCreateCallback(newCommentLink);

	SocialStream.Objects.addInitCallback(initNew);

	return {
		initNew: initNew
	};

})(SocialStream, jQuery);
