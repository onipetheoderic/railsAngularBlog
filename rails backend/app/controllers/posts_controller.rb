class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create

    # @post = current_user.posts.build(post_params)

    # if @post.save #when we redirect to the @recipe instance, we re redirecting to the show page of the instance recipe
    #   render json: @post, status: :created, location: @post
    # else
    #    render json: @post.errors, status: :unprocessable_entity
    # end
    @post = Post.new(post_params)
    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def search
    name = params[:name] || nil
    errorMsg = "no search found"
    movies = []
    movies = Post.where('title LIKE ? '\
      'OR body LIKE ?', "%#{name}%", "%#{name}%").limit(10) if name
      render json: movies
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:title, :body, :user_id)
    end
end
