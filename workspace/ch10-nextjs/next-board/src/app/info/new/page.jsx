
export default function Page() {
  return (
    <>
      <main class="min-w-[320px] p-4">
        <div class="text-center py-4">
          <h2 class="text-2xl font-bold text-gray-700 dark:text-gray-200">게시글 등록</h2>
        </div>
        <section class="mb-8 p-4">
          <form action="/info/1">
            <div class="my-4">
              <label class="block text-lg content-center" for="title">제목</label>
              <input
                id="title"
                type="text"
                placeholder="제목을 입력하세요." 
                class="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                name="title"
              />
              <p class="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">제목은 필수입니다.</p>
            </div>
            <div class="my-4">
              <label class="block text-lg content-center" for="content">내용</label>
              <textarea 
                id="content"
                rows="15" 
                placeholder="내용을 입력하세요."
                class="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                name="content"
              ></textarea>
              <p class="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">내용은 필수입니다.</p>
            </div>
            <hr />
            <div class="flex justify-end my-6">
              <button type="submit" class="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">등록</button>
              <a href="/info" class="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</a>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
