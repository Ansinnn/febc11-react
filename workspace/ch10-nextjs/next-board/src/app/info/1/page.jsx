
export default function Page() {
  return (
    <>
      <main class="container mx-auto mt-4 px-4">

      <section class="mb-8 p-4">
        <form action="/info">
        <div class="font-semibold text-xl">제목 : 좋은 소식이 있습니다.</div>
          <div class="text-right text-gray-400">작성자 : 제이지</div>
          <div class="mb-4">
            <div>
              <pre class="font-roboto w-full p-2 whitespace-pre-wrap">좋은 소식을 가지고 왔습니다.<br />오늘 드디어 최종 면접을 합니다.<br />많이 응원해 주세요^^</pre>
            </div>
            <hr/>
          </div>
          <div class="flex justify-end my-4">
            <a href="/info" class="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">목록</a>
            <a href="/info/1/edit" class="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</a>
            <button type="submit" class="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
          </div>
        </form>
      </section>

      <section class="mb-8">
        <h4 class="mt-8 mb-4 ml-2">댓글 2개</h4>

        <div class="shadow-md rounded-lg p-4 mb-4">
          <div class="flex justify-between items-center mb-2">
            <img
              class="w-8 mr-2 rounded-full"
              src="https://api.fesp.shop/files/00-sample/user-muzi.webp"
              alt="어피치 프로필 이미지"
            />
            <a href="" class="text-orange-400">어피치</a>
            <time class="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">2024.07.02 14:11:22</time>
          </div>
          <div class="flex justify-between items-center mb-2">
            <form action="#">
              <pre class="whitespace-pre-wrap text-sm">화이팅!</pre>
              <button type="submit" class="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
            </form>
          </div>  
        </div>

        <div class="shadow-md rounded-lg p-4 mb-4">
          <div class="flex justify-between items-center mb-2">
            <img
              class="w-8 mr-2 rounded-full"
              src="https://api.fesp.shop/files/00-sample/user-muzi.webp"
              alt="무지 프로필 이미지"
            />
            <a href="" class="text-orange-400">무지</a>
            <time class="ml-auto text-gray-500" dateTime="2024.07.07 12:34:56">2024.07.07 12:34:56</time>
          </div>
          <div class="flex justify-between items-center mb-2">
            <form action="#">
              <pre class="whitespace-pre-wrap text-sm">축하해요~~~</pre>
              <button type="submit" class="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
            </form>
          </div>  
        </div>

        <div class="p-4 border border-gray-200 rounded-lg">
          <h4 class="mb-4">새로운 댓글을 추가하세요.</h4>
          <form action="#">
            <div class="mb-4">
              <textarea
                rows="3"
                cols="40"
                class="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="내용을 입력하세요."
                name="comment"></textarea>

              <p class="ml-2 mt-1 text-sm text-red-500">
                내용은 필수입니다.
              </p>
              
            </div>
            <button type="submit" class="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">댓글 등록</button>
          </form>
        </div>

      </section>


      </main>
    </>
  );
}
