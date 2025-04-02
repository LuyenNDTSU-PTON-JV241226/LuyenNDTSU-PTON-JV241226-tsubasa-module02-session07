import React from 'react'

export default function Demo2() {
  return (
    <div>
        <div className="font-mono flex flex-col gap-10">
            <h1 className="text-2xl font-bold">
                [Bài tập] Bố cục các phần tử trong trang
            </h1>
            <div>
                <div className="flex justify-start gap-2 border-2 p-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        01
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        02
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        03
                    </button>
                </div>
                <h2 className='text-center'>Hình 1.1. Các phần tử nằm bên trái</h2>
            </div>
            <div>
                <div className="flex justify-end gap-2 border-2 p-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        01
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        02
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        03
                    </button>
                </div>
                <h2 className='text-center'>Hình 1.2. Các phần tử nằm bên phải</h2>
            </div>
            <div>
                <div className="flex justify-center gap-2 border-2 p-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        01
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        02
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        03
                    </button>
                </div>
                <h2 className='text-center'>Hình 1.3. Các phần tử nằm ở giữa</h2>
            </div>
            <div>
                <div className="flex justify-between gap-2 border-2 p-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        01
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        02
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        03
                    </button>
                </div>
                <h2 className='text-center'>Hình 1.4. Các phần tử giãn ra hai bên</h2>
            </div>
            <div>
                <div className="flex justify-around gap-2 border-2 p-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        01
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        02
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        03
                    </button>
                </div>
                <h2 className='text-center'>Hình 1.5. Các phần tử giãn đều 2 bên</h2>
            </div>
            <div>
                <div className="flex justify-evenly gap-2 border-2 p-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        01
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        02
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        03
                    </button>
                </div>
                <h2 className='text-center'>Hình 1.6. Các phần tử giữa đều</h2>
            </div>
        </div>
    </div>
  )
}
