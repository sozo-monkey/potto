package potto.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Created by tomo on 2016/03/20.
 */
@Controller
@RequestMapping
public class TopController {

    @RequestMapping(method = GET)
    public String top() {
        return "views/top";
    }
}
