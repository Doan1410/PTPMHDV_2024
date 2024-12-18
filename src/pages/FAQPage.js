import React, { useState, useRef } from 'react';
import '../styles/FAQPage.css';
import Footer from "../components/Footers/Footer";
import Menu from "../components/Menus/Menu";
const FAQPage = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const sectionsRef = useRef({});

  const toggleFAQ = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const scrollToSection = (section) => {
    sectionsRef.current[section].scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = {
    "Chính sách bán hàng": [
      {
        question: "Tôi có được huỷ cọc xe không?",
        answer: (
          <ul>
            <li>Đối với đơn hàng đặt cọc trước: Quý khách được chuyển nhượng/chuyển giao, chấm dứt Thỏa thuận đặt cọc và rút lại Tiền Đặt Cọc theo quy trình và hướng dẫn của VinFast.</li>
            <li>Đối với đơn hàng đặt cọc cam kết: Quý khách không được hoàn/hủy và được phép chuyển giao cọc.</li>
          </ul>
        )
      },
      {
        question: "Làm thế nào để đặt cọc bổ sung VF 8?",
        answer: (
          <div>
            <p>Để đặt cọc bổ sung ô tô điện VinFast VF 8, khách hàng có thể thực hiện theo những cách sau:</p>
            <p><strong>1. Đặt cọc trực tiếp tại hệ thống Showroom VinFast trên toàn quốc, sau đó ký hợp đồng mua bán chính thức.</strong></p>
            <p><strong>2. Đặt cọc bổ sung online</strong></p>
            <ul>
              <li><strong>Bước 1:</strong> Khách hàng truy cập trang web đăng ký cọc bổ sung VinFast VF 8</li>
              <li><strong>Bước 2:</strong> Khách hàng nhập các thông tin tra cứu:
                <ul>
                  <li>Số điện thoại đã đặt hàng.</li>
                  <li>Mã đơn hàng. Đối với:
                    <ul>
                      <li>Định dạng đơn online: VFVxxxxxxxxx – Được gửi vào email Khách hàng khi hoàn tất đặt cọc.</li>
                      <li>Định dạng đơn offline: xxxx-VSO-xx-xx-xxxx – NVSO – Được cung cấp bởi Tư vấn bán hàng tại Showroom.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><strong>Bước 3:</strong> Kiểm tra lại các thông tin đơn hàng</li>
              <li><strong>Bước 4:</strong> Chọn hình thức thanh toán & Thanh toán bổ sung</li>
              <li><strong>Bước 5:</strong> Nhập thông tin thẻ và Chọn Thanh toán. Sau khi thanh toán thành công, VinFast sẽ gửi thông báo xác nhận tình trạng thanh toán thành công cho khách hàng.</li>
              <li><strong>Bước 6:</strong> Nhân viên tư vấn bán hàng của VinFast sẽ liên hệ hỗ trợ hoàn tất ký Hợp đồng mua bán bản cứng với Khách hàng.</li>
            </ul>
          </div>
        )
      },
      {
        question: "Tôi có thể chuyển đổi cọc sang những dòng xe khác của VinFast được không?",
        answer: "Quý khách có quyền chuyển đổi Tiền Đặt Cọc từ ô tô điện VF e34 sang ô tô điện VF 8 hoặc VF 9."
      },
      {
        question: "Làm sao để tính giá lăn bánh xe VinFast?",
        answer: (
          <div>
            <p>Để tiến hành, Khách hàng truy cập vào website: </p>
            <p>Sau đó thực hiện các bước tính chi phí lăn bánh bao gồm:</p>
            <ul>
              <li><strong>Bước 1:</strong> Lựa chọn mẫu xe dự định mua.</li>
              <li><strong>Bước 2:</strong> Lựa chọn phiên bản của dòng xe đó.</li>
              <li><strong>Bước 3:</strong> Lựa chọn Tỉnh/Thành phố nơi chủ xe đăng ký mua.</li>
              <li><strong>Bước 4:</strong> Lựa chọn phương thức thanh toán (trả thẳng hoặc trả góp).</li>
              <li><strong>Bước 5:</strong> Màn hình hiển thị giá niêm yết cộng chi phí đăng ký xe trừ đi những ưu đãi của VinFast (nếu có). Từ đó, khách hàng có thể dự kiến giá lăn bánh xe VinFast mới nhất.</li>
            </ul>
          </div>
        )

      }
    ],
    "Chính sách hậu mãi": [
      {
        question: "Đặt lịch dịch vụ sửa chữa lưu động Mobile service bằng cách nào?",
        answer: (
          <div>
            <p>Để đặt lịch sửa chữa lưu động Mobile Service, Quý khách vui lòng liên hệ với VinFast thông qua các hình thức sau để được hỗ trợ sớm nhất:</p>
            <ul>
              <li>Liên hệ Hotline 1900 23 23 89.</li>
              <li>Liên hệ Hotline Xưởng dịch vụ VinFast gần nhất.</li>
              <li>Đặt lịch thông qua Ứng dụng VinFast trên điện thoại.</li>
            </ul>
          </div>
        )
      },
      {
        question: "Dịch vụ cứu hộ pin ô tô điện là gì?",
        answer: (
          <div>
            <p>Dịch vụ cứu hộ pin ô tô điện VinFast song song với Mobile service và chính sách cứu hộ 24/7 hiện có, nhằm đảm bảo sự thuận tiện, xóa bỏ lo ngại của người dùng về vấn đề sạc pin trên mọi hành trình. Dịch vụ hỗ trợ Khách hàng trong trường hợp xe hết pin giữa đường mà không thể nạp năng lượng bằng bộ sạc di động hoặc trụ sạc công cộng. Ngay sau khi nhận được thông tin cần hỗ trợ từ chủ xe, đội ngũ kỹ thuật viên VinFast sẽ tiếp cận và cung cấp giải pháp sạc xe tại chỗ phù hợp, giúp Khách hàng có thể di chuyển tới địa trạm sạc gần nhất.</p>
            <p>Chỉ với 50.000 VNĐ/lần, xe của khách hàng sẽ được sạc pin trong 15 phút.</p>
            <p>Điều kiện cứu hộ pin xe điện VinFast được quy định như sau:</p>
            <ul>
              <li>Điều kiện áp dụng: Xe hết pin HV và vị trí xe Khách hàng không gần các địa điểm có thể sạc được.</li>
              <li>Địa điểm cứu hộ: Khách hàng đáp ứng yêu cầu như vị trí xe cứu hộ pin có thể tiếp cận, vận hành, đảm bảo an toàn lao động và an toàn giao thông trong suốt quá trình cứu hộ pin.</li>
              <li>Thời gian cứu hộ: Dịch vụ cứu hộ pin hoạt động 24/7 và vào tất cả các ngày kể cả lễ.</li>
            </ul>
          </div>
        )

      },
      {
        question: "Trường hợp nào không được gọi cứu hộ VinFast 24/7?",
        answer: (
          <div>
            <p>Các điều khoản loại trừ của dịch vụ cứu hộ VinFast 24/7 như sau:</p>
            <ul>
              <li>Chủ xe không tuân thủ các khuyến cáo thực hiện triệu hồi của VinFast.</li>
              <li>Chủ sở hữu thực hiện các thay đổi về kết cấu xe ngoài phạm vi cho phép của VinFast.</li>
              <li>Người dùng lạm dụng xe hoặc sử dụng sai mục đích như đua xe, off road, chở quá tải hoặc các mục đích khác không được VinFast hoặc pháp luật cho phép.</li>
              <li>Người điều khiển cố ý lái xe trên các địa hình khắc nghiệt như các địa hình nhiều ổ gà, mảnh vỡ, nhiều chướng ngại vật khác...</li>
              <li>VinFast từ chối giải quyết các yêu cầu về các chi phí gián tiếp phát sinh trong quá trình cứu hộ gồm: thời gian, thu nhập của chủ xe, tổn thất tinh thần, tổn thất về thương mại, chi phí điện thoại...</li>
              <li>Chi phí hoàn trả xe cho chủ sở hữu sau khi cứu hộ và sửa chữa xong sẽ không thuộc phạm vi của chính sách cứu hộ VinFast.</li>
              <li>Trong trường hợp thiên tai, dịch bệnh hoặc trường hợp bất khả kháng, khả năng cung cấp dịch vụ cứu hộ của VinFast có thể bị hạn chế.</li>
            </ul>
          </div>
        )

      },
      {
        question: "Làm thế nào để gọi cứu hộ VinFast 24/7?",
        answer: (
          <div>
            <p>Khi gặp sự cố, khách hàng có thể liên hệ ngay với tổng đài hỗ trợ và cứu hộ miễn phí 24/7 qua số điện thoại hỗ trợ xe VinFast: 1900 23 23 89. Hiện tại, dịch vụ hỗ trợ được triển khai trên toàn quốc, áp dụng cho tất cả các dòng xe điện và xe xăng của VinFast.</p>
            <p>Sau khi nhận được thông tin từ khách hàng, các kỹ thuật viên VinFast sẽ lập tức hỗ trợ bất kỳ thời gian và địa điểm nào. Đội cứu hộ VinFast sẽ kéo xe về nhà phân phối hoặc xưởng dịch vụ gần nhất đối với những hư hỏng nằm trong danh mục bảo hành mà VinFast đánh giá không thể khắc phục được tại chỗ.</p>
          </div>
        )
      }
    ],
    "Hệ thống trạm sạc": [
      {
        question: "Thời gian được phép dừng đỗ ở các trạm sạc của VinFast là bao lâu?",
        answer: (
          <div>
            <p>VinFast không quy định thời gian dừng đỗ xe tại các trạm sạc công cộng. Tuy nhiên, để xây dựng thói quen sử dụng trạm sạc văn minh, sau khi xe đã đầy pin với thời gian đỗ vượt quá 30 phút, Khách hàng chỉ trả phụ phí sạc quá giờ (1.000 đồng/phút). Không áp dụng với sạc pin Xe máy điện và sạc pin Ô tô điện tại trụ sạc 11kW. Vì thế, Khách hàng cần lưu ý để tránh thanh toán thêm các khoản phí không cần thiết.</p>
          </div>
        )

      },
      {
        question: "Thời hạn thanh toán chi phí sạc ô tô điện VinFast tại trạm như thế nào?",
        answer: (
          <div>
            <p>Khách hàng sử dụng dịch vụ tại trạm sạc VinFast có thể thanh toán trực tiếp tại các Showroom/Nhà phân phối của VinFast hoặc online trên ứng dụng VinFast với thời hạn thanh toán như sau:</p>
            <ul>
              <li>Khách hàng thanh toán trả sau toàn bộ phí thuê pin và phí sạc xe điện VinFast tại trạm công cộng theo từng tháng, muộn nhất vào ngày 15 của tháng tiếp theo.</li>
            </ul>
          </div>
        )

      },
      {
        question: "Ý nghĩa các loại đèn báo trên trụ sạc VinFast tại các trạm sạc công cộng là gì?",
        answer: (
          <div>
            <p>Ý nghĩa các loại đèn báo trên trụ sạc VinFast tại các trạm sạc công cộng như sau:</p>
            <ul>
              <li>Đèn LED màu xanh lá cây: Trụ sạc khả dụng, sẵn sàng sạc được.</li>
              <li>Đèn LED màu xanh da trời: Trụ sạc đang trong phiên sạc.</li>
              <li>Đèn LED màu đỏ hoặc không sáng đèn: Trụ sạc không khả dụng.</li>
            </ul>
          </div>
        )

      },
      {
        question: "Có thể sạc xe ô tô điện khác ở trạm sạc VinFast không?",
        answer: (
          <div>
            <p>Hiện nay, dịch vụ sạc pin tại hệ thống trạm sạc VinFast chỉ áp dụng cho quý khách hàng sử dụng xe điện VinFast.</p>
            <p>Như vậy, người điều khiển xe điện của hãng khác sẽ không được sử dụng dịch vụ sạc tại các trạm của VinFast.</p>
          </div>
        )

      }
    ],
    "Thông tin sản phẩm": [
      {
        question: "Mẫu xe ô tô điện VinFast nào có quãng đường di chuyển dài nhất?",
        answer: (
          <div>
            <p>Hiện tại, mẫu xe VinFast VF 9 là mẫu xe có quãng đường di chuyển dài nhất sau khi sạc đầy, cụ thể:</p>
            <ul>
              <li>VinFast VF 9 Eco có thể di chuyển lên đến 438 km.</li>
              <li>VinFast VF 9 Plus có thể di chuyển lên đến 423 km.</li>
            </ul>
          </div>
        )

      },
      {
        question: "Ô tô điện VinFast thuộc phân khúc nào?",
        answer: (
          <div>
            <p>Hiện VinFast đang sở hữu 3 mẫu ô tô điện thuộc các phân khúc xe khác nhau mà quý khách có thể lựa chọn để phù hợp với nhu cầu cá nhân:</p>
            <ul>
              <li>VF 5: SUV hạng A.</li>
              <li>VF 6: SUV hạng B.</li>
              <li>VF e34: SUV/Crossover hạng C.</li>
              <li>VF 8: SUV hạng D.</li>
              <li>VF 9: SUV hạng E.</li>
            </ul>
          </div>
        )

      },
      {
        question: "Chi phí sở hữu xe ô tô điện VinFast bao gồm những gì?",
        answer: (
          <div>
            <p>Chi phí sở hữu xe ô tô điện VinFast bao gồm các khoản sau:</p>
            <ul>
              <li>Chính sách ưu đãi thuế của Chính phủ.</li>
              <li>Các loại phí khi mua xe.</li>
              <li>Chi phí thuê pin và sạc pin.</li>
              <li>Chi phí bảo dưỡng và sửa chữa.</li>
            </ul>
            <p>Nhìn chung, chi phí sở hữu xe ô tô điện VinFast tương tự như xe xăng, nhưng tiết kiệm hơn về mặt kinh tế.</p>
          </div>
        )

      }
    ],
    "Thuê pin - Sạc pin": [
      {
        question: "Tôi thanh toán phí thuê bao pin vào lúc nào?",
        answer: (
          <div>
            <p>Chi phí thuê pin được thanh toán theo điều khoản của nội dung của hợp đồng thuê pin, theo đó với xe máy điện phải thanh toán muộn nhất ngày 5 hàng tháng. Ô tô điện thanh toán muộn nhất vào ngày 14 hàng tháng cho chi phí cước tháng trước đó.</p>
          </div>
        )

      },
      {
        question: "Tôi muốn tra cứu lịch sử sạc pin thì có thể xem ở đâu?",
        answer: (
          <div>
            <p>Khách hàng có thể tra cứu lịch sử sạc pin ô tô điện tại:</p>
            <ul>
              <li>Ứng dụng VinFast.</li>
              <li>Màn hình điều khiển của ô tô điện.</li>
            </ul>
          </div>
        )

      },
      {
        question: "Tôi muốn dừng sạc khẩn cấp trong trường hợp có sự cố thì phải làm thế nào?",
        answer: (
          <div>
            <p>Khi thấy hiện tượng trụ sạc hoặc xe có mùi khét, các sự cố ngoài tầm kiểm soát, Khách hàng cần bình tĩnh và xử lý theo hướng dẫn sau:</p>
            <ul>
              <li>Bấm nút dừng khẩn cấp để ngừng sạc. Vị trí nút dừng khẩn cấp tại các trụ sạc:
                <ul>
                  <li>Trụ AC 11kW: Nút dừng nằm bên hông phải của trụ sạc;</li>
                  <li>Trụ DC 30kW: Nút dừng ở bên dưới hộp để súng sạc;</li>
                  <li>Trụ DC 60kW: Nút dừng ở giữa/trên 2 hộp đựng súng sạc ở mặt đằng trước, tùy nhà sản xuất;</li>
                  <li>Trụ DC 60kW SC: Nút dừng ở giữa 2 hộp đựng súng sạc;</li>
                  <li>Trụ DC 150kW SC: Nút dừng nằm ở bên hông phải của trụ sạc;</li>
                  <li>Trụ sạc siêu nhanh 150kW và 300kW: Nút dừng ngay bên hông của trụ sạc.</li>
                </ul>
              </li>
              <li>Gọi nhân viên cứu hộ nếu cần thiết.</li>
            </ul>
          </div>
        )

      },
      {
        question: "Làm thế nào để sạc xe ô tô điện VinFast tại trạm sạc?",
        answer: (
          <div>
            <p>Để sạc xe ô tô điện VinFast tại trạm sạc, Quý khách vui lòng thực hiện theo các bước sau:</p>
            <ul>
              <li><strong>Bước 1:</strong> Di chuyển xe vào khu vực sạc của trạm sạc (trạm sạc sẽ có đèn LED màu xanh lá cây).</li>
              <li><strong>Bước 2:</strong> Đỗ xe vào vị trí an toàn, sau đó mở cổng sạc.</li>
              <li><strong>Bước 3:</strong> Lấy súng sạc từ trạm sạc và cắm vào cổng sạc của xe. Khi trạm sạc và xe kết nối thành công, đèn LED trên trạm sạc sẽ chuyển sang màu xanh da trời. Lúc này, quá trình sạc sẽ tự động bắt đầu.</li>
              <li><strong>Bước 4:</strong> Kiểm tra thông tin trạng thái sạc hiển thị trên ứng dụng VinFast, màn hình trung tâm của xe hoặc màn hình LCD của trạm sạc.</li>
              <li><strong>Bước 5:</strong> Khi phiên sạc hoàn tất (đầy pin hoặc đạt SOC đã đặt), hệ thống sẽ gửi thông báo qua ứng dụng VinFast, màn hình trung tâm của xe và màn hình LCD của trạm sạc. Để kết thúc phiên sạc, người dùng nhấn nút dừng sạc trên màn hình trung tâm, quá trình này mất khoảng 10 giây.</li>
              <li><strong>Bước 6:</strong> Rút súng sạc, đóng nắp cổng sạc và di chuyển xe ra khỏi khu vực sạc an toàn để nhường chỗ cho các xe khác.</li>
              <li><strong>Bước 7:</strong> Kiểm tra lịch sử sạc trên ứng dụng VinFast và thanh toán phí theo quy định.</li>
            </ul>
          </div>
        )

      },
      {
        question: "Không nên sạc pin ô tô điện VinFast trong những trường hợp nào?",
        answer: (
          <div>
            <p>Khách hàng không nên sạc pin ô tô điện VinFast trong các trường hợp sau đây:</p>
            <ul>
              <li>Khi điều kiện thời tiết xấu: trời mưa to, có sấm sét.</li>
              <li>Trong các trường hợp bất thường như: trụ sạc hoặc xe có mùi khét, cháy, hỏa hoạn, hoặc các việc ngoài tầm kiểm soát khác...</li>
              <li>Không sạc pin khi phát hiện các bất thường xung quanh hoặc tại trụ sạc: Trụ móp méo quá mức, cạnh chân trụ có các yếu tố mất an toàn như dung dịch bay hơi, xăng dầu, hóa chất,...</li>
              <li>Trường hợp nhiệt độ pin cao (trên 60°C), khách hàng không nên sạc ngay mà đợi khoảng 15-30 phút cho nhiệt độ pin hạ xuống dưới 45°C để quá trình sạc pin an toàn và liên tục.</li>
            </ul>
          </div>
        )

      }
    ],
    "Trợ lý ảo": [
      {
        question: "Làm thế nào để kích hoạt và cài đặt trợ lý ảo VinFast?",
        answer: (
          <div>
            <p>Để kích hoạt và cài đặt trợ lý ảo VinFast, Quý khách có thể thực hiện theo các bước sau:</p>
            <ul>
              <li><strong>Bước 1:</strong> Kích hoạt lần đầu và cài đặt:
                <ul>
                  <li>Hệ thống sẽ giúp thiết lập các tùy chọn cá nhân và giới thiệu các tính năng chính.</li>
                  <li>Để thay đổi cài đặt, vào Cài đặt &gt; Trợ lý ảo. Tại đây, Quý khách có thể tùy chỉnh:
                    <ul>
                      <li>Giới tính: Cài đặt giới tính của trợ lý ảo.</li>
                      <li>Giọng nói: Cài đặt giọng nói theo giọng Bắc hoặc Nam.</li>
                      <li>Chế độ: Cài đặt chế độ hội thoại liên tục (cho phép hội thoại liên tục mà không cần lặp lại lệnh "Hey VinFast" hoặc "VinFast ơi").</li>
                      <li>Thời gian chờ lệnh: Cài đặt thời gian trợ lý ảo lắng nghe lệnh.</li>
                      <li>Chế độ phản hồi: Cài đặt chế độ phản hồi của trợ lý ảo: Mặc định/Im lặng/Nâng cao.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><strong>Bước 2:</strong> Hướng dẫn tương tác:
                <ul>
                  <li>Để kích hoạt trợ lý ảo:
                    <ul>
                      <li>Phương pháp 1: Nhấn nút vật lý trên vô lăng.</li>
                      <li>Phương pháp 2: Ra lệnh "Hey VinFast" hoặc "VinFast ơi".</li>
                      <li>Phương pháp 3: Chạm vào biểu tượng logo VinFast trên màn hình cảm ứng (áp dụng cho các mẫu VF 8 và VF 9).</li>
                    </ul>
                  </li>
                  <li>Nhấn nút để sử dụng trợ lý ảo trên vô lăng hoặc ra lệnh "Hey VinFast" hoặc "VinFast ơi".</li>
                  <li>Hệ thống sẽ phản hồi bằng âm thanh và màn hình sáng lên, báo hiệu trợ lý ảo đã sẵn sàng.</li>
                  <li>Phát biểu yêu cầu của Quý khách.</li>
                  <li>Sau khi nhận lệnh, trợ lý ảo sẽ thực hiện yêu cầu của Quý khách. Nếu yêu cầu vượt quá khả năng của trợ lý ảo, hệ thống sẽ cung cấp gợi ý hoặc chuyển sang các tính năng khác trong khả năng của mình.</li>
                </ul>
              </li>
            </ul>
          </div>
        )

      },
      {
        question: "Trợ lý ảo VinFast là gì?",
        answer: (
          <div>
            <p>Trợ lý ảo VinFast là sản phẩm được phát triển bởi VinBigData dựa trên cơ sở những nền tảng công nghệ tiên tiến nhất hiện nay như trí tuệ nhân tạo (AI), phân tích dữ liệu lớn, sinh trắc học giọng nói,... Với giao diện thân thiện, tốc độ nhận diện và xử lý ngôn ngữ tức thời, công cụ thông minh này có thể giúp người dùng thực hiện cùng lúc nhiều tác vụ rảnh tay khi đang lái xe như:</p>
            <ul>
              <li>Điều khiển xe thông minh.</li>
              <li>Thiết lập, theo dõi và ghi nhớ hồ sơ người lái.</li>
              <li>Điều hướng - Dẫn đường.</li>
              <li>An ninh - An toàn.</li>
              <li>Tiện ích gia đình và văn phòng.</li>
              <li>Mua sắm các sản phẩm và dịch vụ.</li>
              <li>Cập nhật phần mềm từ xa.</li>
              <li>Dịch vụ về xe.</li>
            </ul>
          </div>
        )

      },
      {
        question: "Cách điều khiển các chức năng trên xe thông qua Trợ lý ảo VinFast như thế nào?",
        answer: (
          <div>
            <p>Với Trợ lý ảo VinFast, người dùng có thể dễ dàng mở/tắt các tính năng như điều hòa, quạt gió, wifi,... chỉ bằng giọng nói, hạn chế tối đa việc thao tác bằng tay, đảm bảo an toàn khi đang điều khiển phương tiện. Cách điều khiển các chức năng này bằng việc sử dụng các câu lệnh.</p>
            <ul>
              <li><strong>Điều chỉnh điều hòa</strong>
                <ul>
                  <li>Bật/tắt điều hòa: Sử dụng câu lệnh “Bật điều hòa X độ/Bật X độ”, điều hòa sẽ được điều chỉnh với mức nhiệt như người dùng mong muốn.</li>
                  <li>Điều chỉnh nhiệt điều hòa: Sử dụng câu lệnh “Tăng điều hòa lên X độ”, “Giảm điều hòa về X độ”, hệ thống sẽ điều chỉnh nhiệt độ điều hòa như người dùng mong muốn.</li>
                  <li>Điều chỉnh nhiệt theo cảm nhận người lái: Khi sử dụng câu lệnh “Tôi nóng/Tôi hơi nóng/Tôi nóng quá”, “Tôi lạnh/Tôi hơi lạnh/Tôi lạnh quá”, Trợ lý ảo sẽ hỗ trợ điều chỉnh điều hòa lên/xuống 1 độ, đồng thời tăng/giảm quạt gió lên/xuống từ 1 - 2 mức nhằm mang lại sự thoải mái cho người dùng.</li>
                </ul>
              </li>
              <li><strong>Hệ thống quạt gió</strong>
                <ul>
                  <li>Khởi động quạt gió: Sử dụng câu lệnh “Đặt quạt gió mức X”, Trợ lý ảo sẽ hỗ trợ bật quạt gió từ mức người dùng mong muốn, mức 0 tương ứng với tắt quạt gió.</li>
                  <li>Tùy chỉnh nhiệt độ quạt gió: Sử dụng câu lệnh “Tăng quạt gió lên mức X”, “Giảm quạt gió đi X mức”, quạt gió sẽ được điều chỉnh lên/xuống từ 1 - 2 mức.</li>
                  <li>Chỉnh hướng quạt gió: Sử dụng câu lệnh “Đặt/chỉnh quạt gió hướng mặt/chân/mặt, chân/chân và cửa kính trước”, hệ thống điều chỉnh cánh quạt theo hướng yêu cầu.</li>
                  <li>Thay đổi chế độ lấy gió: Sử dụng câu lệnh “Lấy gió trong/gió ngoài”.</li>
                </ul>
              </li>
              <li><strong>Điều chỉnh chế độ làm mát (nếu được hỗ trợ)</strong>
                <ul>
                  <li>Kích hoạt chế độ làm mát: Sử dụng câu lệnh “Bật/tắt chế độ làm mát”, Trợ lý ảo sẽ kích hoạt hoặc dừng chế độ làm mát cho người dùng.</li>
                </ul>
              </li>
              <li><strong>Hệ thống sấy kính</strong>
                <ul>
                  <li>Sử dụng câu lệnh “Bật/tắt sấy kính”, “Bật/tắt sấy kính trước”, “Sấy kính trước”, “Dừng sấy kính trước”.</li>
                </ul>
              </li>
              <li><strong>Cốp xe (nếu được hỗ trợ)</strong>
                <ul>
                  <li>Sử dụng câu lệnh “Đóng/mở cốp”, “Đóng/mở cốp xe” hoặc “Đóng/mở nắp xe sau”, cốp sẽ tự động điều chỉnh theo yêu cầu. Tác vụ này được thực hiện trong điều kiện xe đã dừng hẳn.</li>
                </ul>
              </li>
              <li><strong>Hệ thống wifi (nếu được hỗ trợ)</strong>
                <ul>
                  <li>Sử dụng câu lệnh Bật/tắt wifi.</li>
                </ul>
              </li>
            </ul>
          </div>
        )

      }
    ]
  };

  return (
    <div className="faq-page-container">
      <Menu /> {/* Thêm Menu */}
      <div className="faq-content-wrapper">
        <div className="faq-container">
          <div className="faq-menu">
            <ul>
              {Object.keys(faqs).map((category, index) => (
                <li key={index} onClick={() => scrollToSection(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="faq-content">
            <h1>Câu hỏi thường gặp</h1>
            {Object.keys(faqs).map((category, catIndex) => (
              <div key={catIndex} ref={(el) => (sectionsRef.current[category] = el)}>
                <h2>{category}</h2>
                {faqs[category].map((faq, index) => (
                  <div className="faq-item" key={index}>
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                      <h3>{faq.question}</h3>
                      <span className="faq-toggle">{activeIndices.includes(index) ? '▲' : '▼'}</span>
                    </div>
                    {activeIndices.includes(index) && <div className="faq-answer">{faq.answer}</div>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Thêm Footer */}
    </div>
  );
};

export default FAQPage;
