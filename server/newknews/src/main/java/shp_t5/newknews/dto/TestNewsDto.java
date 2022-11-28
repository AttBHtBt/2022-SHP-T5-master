package shp_t5.newknews.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(value = "뉴스 정보", description = "기사 분류, 주제, 헤드라인, 링크 요소를 가진 Test Domain Class")
public class TestNewsDto {
    @ApiModelProperty(value = "기사 분류")
    public String subject_num;
    @ApiModelProperty(value = "기사 주제")
    public String subject;
    @ApiModelProperty(value = "기사 헤드라인")
    public String title;
    @ApiModelProperty(value = "기사 링크")
    public String url;

    public TestNewsDto(String subject_num, String subject, String title, String url) {
        this.subject_num = subject_num;
        this.subject = subject;
        this.title = title;
        this.url = url;
    }
}
