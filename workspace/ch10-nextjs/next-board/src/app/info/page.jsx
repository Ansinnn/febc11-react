
export default function Page() {
  return (
    <>
      <main class="min-w-80 p-10">
        <div class="text-center py-4">
          <h2 class="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">정보 공유</h2>
        </div>
        <div class="flex justify-end mr-4">
          
          <form action="#">
            <input
              class="dark:bg-gray-600 bg-gray-100 p-1 rounded"
              type="text"
              name="keyword"
            />
            <button type="submit" class="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">검색</button>
          </form>

          <a href="/info/new" class="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">글작성</a>
        </div>
        <section class="pt-10">
          <table class="border-collapse w-full table-fixed">
            <colgroup>
              <col class="w-[10%] sm:w-[10%]" />
              <col class="w-[60%] sm:w-[30%]" />
              <col class="w-[30%] sm:w-[15%]" />
              <col class="w-0 sm:w-[10%]" />
              <col class="w-0 sm:w-[10%]" />
              <col class="w-0 sm:w-[25%]" />
            </colgroup>
            <thead>
              <tr class="border-b border-solid border-gray-600">
                <th class="p-2 whitespace-nowrap font-semibold">번호</th>
                <th class="p-2 whitespace-nowrap font-semibold">제목</th>
                <th class="p-2 whitespace-nowrap font-semibold">글쓴이</th>
                <th class="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">조회수</th>
                <th class="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">댓글수</th>
                <th class="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">작성일</th>
              </tr>
            </thead>
            <tbody>

              <tr class="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                <td class="p-2 text-center">2</td>
                <td class="p-2 truncate indent-4"><a href="/info/2" class="cursor-pointer">안녕하세요.</a></td>
                <td class="p-2 text-center truncate">용쌤</td>
                <td class="p-2 text-center hidden sm:table-cell">29</td>
                <td class="p-2 text-center hidden sm:table-cell">2</td>
                <td class="p-2 truncate text-center hidden sm:table-cell">2024.07.05 13:39:23</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                <td class="p-2 text-center">1</td>
                <td class="p-2 truncate indent-4"><a href="/info/1" class="cursor-pointer">좋은 소식이 있습니다.</a></td>
                <td class="p-2 text-center truncate">제이지</td>
                <td class="p-2 text-center hidden sm:table-cell">22</td>
                <td class="p-2 text-center hidden sm:table-cell">5</td>
                <td class="p-2 truncate text-center hidden sm:table-cell">2024.07.03 17:59:13</td>
              </tr>
            </tbody>
          </table>
          <hr />
  
          <div>
            <ul class="flex justify-center gap-3 m-4">
              <li class="font-bold text-blue-700">
                <a href="/info?page=1">1</a>
              </li>
              <li>
                <a href="/info?page=2">2</a>
              </li>
            </ul>
          </div>



        </section>
      </main>
    </>
  );
}
