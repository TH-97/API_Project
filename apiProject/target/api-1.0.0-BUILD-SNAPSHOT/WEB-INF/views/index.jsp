<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page session="false" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ADL</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/index.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/resources/css/index-r.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/loading.css">
    <script src="${pageContext.request.contextPath }/resources/js/index.js" defer></script>
</head>
<body>
<!--loading-->
<div class="loading-wrap loading-wrap--js" style="display: none">
    <div class="loading-spinner loading-spinner--js"></div>
    <p id="loadingMessage"></p>
</div>
<!--loading-->
    <header>
        <div class="h-wrap">
            <div class="h-wrap-container">
                <div class="h-wrap-logo">
                    <a href="/"><img src="${pageContext.request.contextPath }/resources/img/logo.png" alt="메인로고"></a>
                </div>
                <div class="h-wrap-list">
                    <div class="h-list-item list-item1"><a href="">API 추출</a></div>
                    <div class="h-list-item list-item2"><a href="">API 변환</a></div>
                </div>
                <div class="h-wrap-info">
                    <div class="h-info-item info-item1"><a href="">사용 방법</a></div>
                    <div class="h-info-item info-item2"><a href="">회원 가입</a></div>
                    <div class="h-info-item info-item3"><a href="">로그인</a></div>
                    <button id="info-item4"><img src="${pageContext.request.contextPath }/resources/img/menu-bar.png" alt=""></button>
                </div>
            </div>
        </div>

    </header>

    <section>

        <div class="s-wrap-search">
            <div class="s-search">

                <div class="s-search-item item-data">
                    <div class="search-data">
                        <span>공공데이터 검색</span>
                        <div class="search-data-input">
                            <input type="text" id="data-search-input" title="검색할 단어를 입력하세요." placeholder="필요한 공공 데이터를 입력하세요.">
                            <button id="data-search-btn">검색</button>
                        </div>
                    </div>
                </div>
                <div id="search-area">
                <div class="s-search-item">
                    <div class="search-url">
                        <span>Request URL</span>
                        <input type="text" id="url-value" placeholder="요청하고자 하는 API의 요청 메세지 URL을 입력하세요.">
                        <button id="url-search-btn">불러오기</button>
                        <button id="url-search-btn2">불러오기</button>
                    </div>
                </div>

                <div class="s-search-item">
                    <div class="search-sk">
                        <span>Service KEY</span>
                        <input type="text" id="serviceKey-value" placeholder="요청하고자 하는 API의 발급받은 인증키를 입력하세요.">
<%--                        <button>추가</button>--%>
                    </div>
                </div>
                <div class="s-search-item">
                    <div class="search-op">
                        <span>Option</span>
                        <input type="text" id="option-value" placeholder="필수 옵션을 입력해주시오.">
                        <button id="option-button">추가</button>
                    </div>
                </div>
                </div>

            </div>
        </div>


        <div class="s-wrap-main" id="s-wrap-main">
            <div class="s-main-left">
                <div class="s-left-wrap">
                    <div class="s-left-title"><span>불러온 정보</span></div>
                    <div class="s-left-info" id="s-left-info"></div>
                </div>

                <!-- 반응형 화면 -->
                <div class="s-left-hide-first">
                    <div class="s-left-hide-wrap">
                        <div class="s-left-hide-title"><span>불러온 정보</span></div>
                        <div class="s-left-hide-info" id="s-left-info2"></div>
                    </div>
                </div>
                <div class="s-left-hide-second">
                    <div class="s-center-wrap2">
                        <div class="s-center-title2"><span>태그명</span><button id="search-tag2">검색</button></div>
                        <div class="s-center-content2">
                            <div class="s-center-input2" id="s-center-input2">
                                <input type="text" placeholder="최대 5개 태그 검색">
                                <button id="insert-tag2"><img src="${pageContext.request.contextPath }/resources/img/plus.png" alt="태그 추가"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 반응형 화면 -->
            </div>

            <div class="s-main-center">
                <div class="s-center-wrap">
                    <div class="s-center-title"><span>태그명</span><button id="search-tag">검색</button></div>
                    <div class="s-center-content">
                        <div class="s-center-input" id="s-center-input">
                            <input type="text" placeholder="최대 10개 추가 가능">
                            <button id="insert-tag"><img src="${pageContext.request.contextPath }/resources/img/plus.png" alt="태그 추가"></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="s-main-right">
                <div class="s-right-wrap">
                    <div class="s-right-title">
                        <span>소스 확인</span>
                        <div class="s-right-search">
                            <select name="" id="">
                                <option value="JAVA">JAVA</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="JQuery">JQuery</option>
                            </select>
                            <button>확인</button>
                        </div>
                    </div>

                    <div class="s-right-content"></div>
                </div>
            </div>

        </div>

    </section>

    <footer>

        <div class="f-wrap"></div>

    </footer>
</body>
</html>