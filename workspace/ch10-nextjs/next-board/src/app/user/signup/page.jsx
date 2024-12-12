
export default function Page() {
  return (
    <>
      <main class="min-w-80 flex-grow flex items-center justify-center">
        <div class="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
          <div class="text-center py-4">
            <h2 class="text-2xl font-bold text-gray-700 dark:text-gray-200">회원 가입</h2>
          </div>
  
          <form action="/">
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-gray-200 mb-2" for="name">이름</label>
              <input
                type="text"
                id="name"
                placeholder="이름을 입력하세요"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
                name="name"
              />
              <p class="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">이름은 필수입니다.</p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-gray-200 mb-2" for="email">이메일</label>
              <input
                type="email"
                id="email"
                placeholder="이메일을 입력하세요"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
                name="email"
              />
              <p class="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">이메일은 필수입니다.</p>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-gray-200 mb-2" for="password">비밀번호</label>
              <input
                type="password"
                id="password"
                placeholder="비밀번호를 입력하세요"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
                name="password"
              />
              <p class="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">비밀번호는 필수입니다.</p>
            </div>
  
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-gray-200 mb-2" for="attach">프로필 이미지</label>
              <input
                type="file"
                id="attach"
                accept="image/*"
                placeholder="이미지를 선택하세요"
                class="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
                name="attach"
              />
            </div>
  
            <div class="mt-10 flex justify-center items-center">
              <button type="submit" class="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</button>
              <a href="/" class="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</a>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
